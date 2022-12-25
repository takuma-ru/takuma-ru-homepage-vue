import {
  collection,
  getDocs,
  getFirestore,
  Timestamp
} from 'firebase/firestore'

import {
  IProductData,
  ProductDataListType
} from '~/types/composables/firebase/productData'

export const useProductDataStore = defineStore('productData', () => {
  const db = getFirestore()

  /* -- state -- */
  /**
   * 開発物リスト
   */
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
  /**
   * センシングデータを1回取得する
   */
  const getProductData = async () => {
    initProductData()

    const docRef = collection(db, 'productData')
    const docSnap = await getDocs(docRef)

    docSnap.forEach((doc) => {
      const docData = {
        productId: doc.id,
        ...doc.data()
      } as IProductData

      /* console.log(doc.id, ' => ', doc.data()) */
      pushProductData(docData)
    })
  }

  /**
   * productId から開発物データを検索し返す
   */
  const searchProductData = (productId : string | string[]) => {
    let productData = productDataList.value.find(data => data.productId === productId) as IProductData
    if (!productData) {
      productData = {
        productId: 'undefined',
        usedTechniques: [
          'vuejs'
        ],
        imgSrc: [
          '/imgs/undefined-img.png'
        ],
        developmentPeriod: {
          end: Timestamp.fromDate(new Date()),
          start: Timestamp.fromDate(new Date())
        },
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
    searchProductData
  }
})
