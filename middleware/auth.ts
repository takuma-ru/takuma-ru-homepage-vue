interface IVerifyIsAdminRes {
  isAdmin?: boolean
  message: string
}

export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const authStore = useAuthStore()

    await authStore.checkAuthState()

    if (authStore.loggedInUser.uid && authStore.idToken) {
      const verifyIsAdminRes:IVerifyIsAdminRes = await $fetch('http://localhost:5001/takuma-ru-homepage/asia-northeast1/api/verify-is-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          idToken: authStore.idToken
        }
      })

      if (!verifyIsAdminRes.isAdmin) {
        // authStore.trySignOut()
        return navigateTo('/admin/error')
      }
    } else {
      return navigateTo('/admin/signIn')
    }
  }
})
