import {
  getAuth,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  User,
  GithubAuthProvider,
  GoogleAuthProvider
} from 'firebase/auth'
import { IloggedInUser } from '~/types/composables/firebase/loggedInUserInterface'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const auth = getAuth()

  /* -- state -- */
  /**
   * 現在ログイン中のユーザー情報
   */
  const loggedInUser = reactive<IloggedInUser>({
    name: null,
    email: null,
    uid: null,
    photoURL: null,
    providerId: null
  })

  /**
   * ログイン中かどうかのフラグ
   */
  const isLoggedIn = ref<boolean>(false)

  /**
   * APIのパラメータに含めるためのアクセストークン
   */
  const idToken = ref<string | null>(null)

  /* -- mutation -- */
  /**
   * loggedInUser の更新を行う
   * @param userData 更新したい値
   */
  const updateLoggedInUser = (userData: IloggedInUser) => {
    loggedInUser.email = userData.email
    loggedInUser.name = userData.name
    loggedInUser.photoURL = userData.photoURL
    loggedInUser.uid = userData.uid
    loggedInUser.providerId = userData.providerId
  }

  /**
   * isLoggedIn のフラグを更新する
   * @param state 変更したいフラグ値
   */
  const updateIsLoggedIn = (state: boolean) => {
    isLoggedIn.value = state
  }

  /**
   * token の更新を行う
   * @param state 更新したい値
   */
  const updateIdToken = (state: string | null) => {
    idToken.value = state
  }

  /* -- action -- */
  /**
   * Googleアカウントを用いたログイン処理
   */
  const trySignIn = (providerName: IloggedInUser['providerId']) => {
    const provider = providerName === 'github.com' ? githubProvider : googleProvider
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup(auth, provider).then((result) => { // ログイン成功時
          // アクセストークンの取得と更新
          const credential = providerName === 'github.com' ? GithubAuthProvider.credentialFromResult(result) : GoogleAuthProvider.credentialFromResult(result)
          const token = credential?.idToken
          if (token) {
            updateIdToken(token)
          }

          // ユーザーデータの取得と更新
          const user = result.user
          updateLoggedInUser({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            providerId: result.providerId
          })

          // ログイン成功フラグを立てる
          updateIsLoggedIn(true)
        }).catch((error) => { // ログイン失敗時
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.email
          updateIsLoggedIn(false)
          console.error('error code:', errorCode, 'error message:', errorMessage, 'your email:', email)
        })
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        updateIsLoggedIn(false)

        console.error('ERROR: firebase/auth \n errorCode', errorCode, '\nerrorMessage', errorMessage)
      })
  }

  /**
   * ログアウト処理
   */
  const trySignOut = () => {
    signOut(auth).then(() => {
      updateIdToken(null)
      updateLoggedInUser({
        name: null,
        email: null,
        uid: null,
        photoURL: null,
        providerId: null
      })
      updateIsLoggedIn(false)
      router.go(0)
    }).catch((error) => {
      console.error(error)
    })
  }

  /**
   * middleware用 ログイン状態取得
   */
  const checkAuthState = async () => {
    const checkState = () => new Promise<User | null>((resolve, reject) => {
      if (process.server) { return resolve(null) }
      onAuthStateChanged(auth,
        user => resolve(user || null),
        error => reject(error)
      )
    })

    try {
      const user = await checkState()

      if (user) {
        updateIdToken(await user.getIdToken())

        updateLoggedInUser({
          name: user!.displayName,
          email: user!.email,
          uid: user!.uid,
          photoURL: user!.photoURL,
          providerId: user!.providerData[0].providerId
        })

        updateIsLoggedIn(true)
      }

      return user
    } catch (error) {
      console.error(error)
      updateIdToken(null)
      updateLoggedInUser({
        name: null,
        email: null,
        uid: null,
        photoURL: null,
        providerId: null
      })
      updateIsLoggedIn(false)
    }
  }

  /* -- other -- */
  // ログイン状態を常時監視
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const token = await user.getIdToken()
      if (token) {
        updateIdToken(token)
      }

      updateLoggedInUser({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
        providerId: user.providerData[0].providerId
      })

      updateIsLoggedIn(true)
    } else {
      updateIdToken(null)

      updateLoggedInUser({
        name: null,
        email: null,
        uid: null,
        photoURL: null,
        providerId: null
      })

      updateIsLoggedIn(false)
    }
  })

  return {
    loggedInUser: readonly(loggedInUser),
    isLoggedIn: readonly(isLoggedIn),
    idToken: readonly(idToken),
    trySignIn,
    trySignOut,
    checkAuthState
  }
})
