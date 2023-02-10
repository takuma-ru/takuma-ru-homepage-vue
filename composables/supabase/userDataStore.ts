import { IUser } from '~/types/composables/supabase/userData'

export const useUserDataStore = defineStore('userData', () => {
  const supabase = useSupabaseClient()
  const supabaseUser = useSupabaseUser()

  /* -- state -- */
  const user = ref<IUser>()

  /* -- mutation -- */
  const updateUser = (state: IUser) => {
    user.value = state
  }

  /* -- action -- */
  const getUserData = async () => {
    if (supabaseUser.value?.id) {
      const { data } = await supabase
        .from('profiles')
        .select('username, full_name, website, avatar_url')
        .eq('id', supabaseUser.value!.id)
        .single()

      if (data) {
        updateUser({
          username: data.username,
          fullName: data.full_name,
          website: data.website,
          avatarPath: data.avatar_url
        })
      } else {
        updateUser({
          username: null,
          fullName: null,
          website: null,
          avatarPath: null
        })
      }
    } else {
      updateUser({
        username: null,
        fullName: null,
        website: null,
        avatarPath: null
      })
    }
  }

  /* -- other -- */
  getUserData()

  return {
    user: readonly(user),
    supabaseUser: readonly(supabaseUser),
    updateUser,
    getUserData
  }
})
