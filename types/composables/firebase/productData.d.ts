import { Timestamp } from "firebase/firestore"

export interface IProductData {
  description: string | HTMLElement[]
  developmentPeriod: {
    start: Timestamp
    end: Timestamp | 'now'
  }
  developmentType: 'Graduation research' | 'Personal development' | 'Team development' | string
  imgSrc: string
  links: Array<ILink>
  productId: string
  title: string
  usedTechniques: Array<string>
}

interface ILink {
  name: string
  url: string
}

export type ProductDataListType = Array<IProductData>
