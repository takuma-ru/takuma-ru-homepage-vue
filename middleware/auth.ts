export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const authStore = useAuthStore()

    await authStore.checkAuthState()

    if (authStore.loggedInUser.uid === null) {
      return navigateTo('/admin/signIn', { replace: true })
      /* if でadminUserData/approvedUid の 認可済みuid一覧 に含まれているかを調べるAPIを叩き、false なら403ページに飛ばしログアウト */
    }
  }
})
