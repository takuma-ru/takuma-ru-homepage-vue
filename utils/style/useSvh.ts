/**
 * viewport の `svh` と同じ画面サイズを求める変数
 */
export const useSvh = () => {
  const svh = ref('0px')

  const setSvh = () => {
    svh.value = window.innerHeight * 0.01 + 'px'
  }

  useEventListener(window, 'resize', setSvh)

  setSvh()

  return {
    svh
  }
}
