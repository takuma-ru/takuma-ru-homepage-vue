import { IProductData, ISupabaseProductsRes, ProductDataListType } from '~/types/composables/supabase/productData'

export const useProductDataStore = defineStore('productData', () => {
  const supabase = useSupabaseClient()

  /* -- state -- */
  const productDataList = ref<ProductDataListType>([])

  /* -- mutation -- */
  /**
   * productDataList に引数のセンシングデータを追加する
   * @param productData 開発物データ
   */
  const pushProductData = (productData: IProductData) => {
    productDataList.value.push(productData)
  }

  const initProductData = () => {
    productDataList.value = []
  }

  /* -- action -- */
  const getProductData = async () => {
    const { data, error } = await supabase
      .from('products')
      .select()
    if (data) {
      data.forEach((row: ISupabaseProductsRes) => {
        pushProductData({
          description: row.description,
          developmentPeriodStart: new Date(row.development_period_start),
          developmentPeriodEnd: row.development_period_end ? new Date(row.development_period_end) : null,
          developmentType: row.development_type,
          imgs: row.imgs,
          links: row.links,
          id: row.id,
          title: row.title,
          usedTechniques: row.used_techniques
        })
      })
    } else {
      console.error(error)
    }
  }

  /* -- getters -- */
  /**
   * productId から開発物データを検索し返す
   */
  const searchProductData = (productId : string | string[]) => {
    let productData = productDataList.value.find(data => data.id === productId) as IProductData
    if (!productData) {
      productData = {
        id: 'undefined',
        usedTechniques: [
          'vuejs'
        ],
        imgs: [
          '/imgs/undefined-img.png'
        ],
        developmentPeriodStart: new Date(),
        developmentPeriodEnd: new Date(),
        developmentType: 'undefined',
        title: '',
        description: 'undefined',
        links: [
          {
            url: 'https://takumaru.dev',
            name: 'This site link'
          }
        ]
      }
    }
    return productData
  }

  /* -- other -- */

  return {
    productDataList: readonly(productDataList),
    getProductData,
    searchProductData,
    initProductData
  }
})
