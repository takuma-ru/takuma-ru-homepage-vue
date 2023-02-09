export interface IProductData {
  description: string | HTMLElement[]
  developmentPeriodStart: Date
  developmentPeriodEnd: Date | null
  developmentType: 'Graduation research' | 'Personal development' | 'Team development' | string
  imgs: Array<string>
  links: Array<ILink>
  id: string
  title: string
  usedTechniques: Array<string>
}

export interface ISupabaseProductsRes {
  description: string | HTMLElement[]
  development_period_start: Date
  development_period_end: Date | null
  development_type: 'Graduation research' | 'Personal development' | 'Team development' | string
  imgs: Array<string>
  links: Array<ILink>
  id: string
  title: string
  used_techniques: Array<string>
}

interface ILink {
  name: string
  url: string
}

export type ProductDataListType = Array<IProductData>
