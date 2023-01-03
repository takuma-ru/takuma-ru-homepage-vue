export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const authStore = useAuthStore()

    await authStore.checkAuthState()

    console.log(authStore.idToken)

    if (authStore.loggedInUser.uid && authStore.idToken) {
      const verifyIsAdminRes = await $fetch('https://asia-northeast1-takuma-ru-homepage.cloudfunctions.net/api/verify-is-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          idToken: authStore.idToken
        }
      })

      if (verifyIsAdminRes === 'false') {
        authStore.trySignOut()
        return abortNavigation(
          createError({ statusCode: 403, message: 'Server could not verify authorization to view this page' })
        )
      }
    } else {
      return navigateTo('/admin/signIn')
    }
  }
})
