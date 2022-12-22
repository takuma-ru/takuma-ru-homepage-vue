/**
 * viewport の `svh` と同じ画面サイズを求める変数
 */
export const useSvh = () => {
  const svh = computed(() => {
    const getSvh = () => {
      return window.innerHeight * 0.01 + 'px'
    }
    useEventListener(window, 'resize', getSvh)
    return getSvh()
  })

  return {
    svh
  }
}
