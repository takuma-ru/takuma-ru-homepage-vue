import { IconNameType } from '~/types/icon/IconNameType'

export interface IPath {
  title: string
  icon?: IconNameType
  path: string
}

/**
 * path
 */
export const usePath = () => {
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

  /**
   * 現在表示しているページのパスが引数のパスと一致しているかを返す
   * @param path 調べたいパス
   * @returns 一致しているかどうかのフラグ
   */
  const isCurrentPath = (path: string): boolean => {
    const route = useRoute()

    return route.fullPath === path
  }

  /**
   * 引数のパスと一致するデータをpathListから取得し返す
   * @param path 取得したいデータのパス
   * @returns 取得したデータ
   */
  const findPathData = (path: string) => {
    const pathData = pathList.find(pathData => pathData.path === path)
    const nullpathData: IPath = {
      title: 'undefined',
      icon: 'error',
      path: '/'
    }
    return pathData || nullpathData
  }

  return {
    pathList,
    isCurrentPath,
    findPathData
  }
}
