import { Provider } from '~/types/composables/supabase/SignInProvider'

export const useAuthStore = defineStore('auth', () => {
  const supabase = useSupabaseClient()

  /* -- state -- */
  const isLoading = ref(false)
  const isLoggedIn = ref(false)

  /* -- mutation -- */
  const updateIsLoading = (state: boolean) => {
    isLoading.value = state
  }

  const updateIsLoggedIn = (state: boolean) => {
    isLoading.value = state
  }

  /* -- action -- */
  /**
   * Email 専用のログイン処理
   * @param email メールアドレス
   */
  const signInWithEmail = async (email: string) => {
    try {
      updateIsLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) { throw error }
      console.log('Check your email for the login link!')
    } catch (error) {
      console.error(error)
    } finally {
      updateIsLoading(false)
    }
  }

  /**
   * Provider を用いたログイン処理
   */
  const signInWithProvider = async (provider: Provider) => {
    updateIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider
      })
      if (error) { throw error }
      updateIsLoggedIn(true)
      console.log('Successful login at provider.', data)
    } catch (error) {
      updateIsLoggedIn(false)
      console.error(error)
    } finally {
      updateIsLoading(false)
    }
  }

  /**
   * サインアウト処理
   */
  const signOut = async () => {
    try {
      updateIsLoading(true)
      const { error } = await supabase.auth.signOut()
      if (error) { throw error }
      updateIsLoggedIn(false)
      navigateTo('/admin/signIn')
    } catch (error) {
      console.error(error)
    } finally {
      updateIsLoading(false)
    }
  }

  /* -- other -- */

  return {
    isLoggedIn: readonly(isLoggedIn),
    signInWithEmail,
    signInWithProvider,
    signOut
  }
})
