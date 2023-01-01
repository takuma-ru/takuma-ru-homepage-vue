export interface IloggedInUser {
  name: string | null
  email: string | null
  uid: string | null
  photoURL: string | null
  providerId: 'google.com' | 'github.com' | string | null
}