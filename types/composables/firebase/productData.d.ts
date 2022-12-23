import { Timestamp } from "firebase/firestore"

export interface IProductData {
  description: string | HTMLElement[]
  developmentPeriod: {
    start: Timestamp | Date
    end: Timestamp | Date | 'now'
  }
  developmentType: 'Graduation research' | 'Personal development' | 'Team development' | string
  imgSrc: Array<string>
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
