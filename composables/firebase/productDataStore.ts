import {
  collection,
  getDocs,
  getFirestore
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
    return productDataList.value.find(data => data.productId === productId)
  }

  const addMockProductData = () => {
    pushProductData({
      productId: 'aaaa',
      usedTechniques: [
        'vue',
        'ts',
        'firebase'
      ],
      imgSrc: [
        'https://firebasestorage.googleapis.com/v0/b/takuma-ru-homepage.appspot.com/o/product_image%2Fchisk%2FfeatureGraphic.png?alt=media&token=d146d2fb-a990-42a5-b6bf-40f3aeb6486b'
      ],
      developmentPeriod: {
        end: new Date(),
        start: new Date()
      },
      developmentType: 'Personal development',
      title: 'CHISK',
      description: 'This is the first web application I implemented using Vue.js. There are many task management applications in the world. However, none of them are interesting. I didn\'t want to bother creating such a thing, so I added a nurturing element to make it fun to do and implemented it.',
      links: [
        {
          url: 'https://taskmgt.takumaru.dev',
          name: 'Application link'
        }
      ]
    })
  }

  /* -- other -- */

  return {
    productDataList: readonly(productDataList),
    getProductData,
    searchProductData,
    addMockProductData
  }
})
