/* interface IVerifyIsAdminRes {
  isAdmin?: boolean
  message: string
} */

export default defineNuxtRouteMiddleware(() => {
  if (!process.server) {
    const supabaseUser = useSupabaseUser()

    if (supabaseUser.value) {
      console.log('is logged in!')
    } else {
      return navigateTo('/admin/signIn')
    }
  }
})
