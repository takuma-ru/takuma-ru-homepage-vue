import { IconNameType } from '~/types/icon/IconNameType'

/**
 * path
 */
export const usePath = () => {
  interface IPath {
    title: string
    icon?: IconNameType
    path: string
  }

  const pathList: Array<IPath> = [
    {
      title: 'About',
      icon: 'person',
      path: '/about'
    },
    {
      title: 'Works',
      icon: 'category',
      path: '/works'
    },
    {
      title: 'Contact',
      icon: 'mail',
      path: '/contact'
    }
  ]

  const isCurrentPath = (path: string): boolean => {
    const route = useRoute()

    return route.fullPath === path
  }

  return {
    pathList,
    isCurrentPath
  }
}
