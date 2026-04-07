import { createContext, useContext } from 'react'

export type LearningTrack = {
  trackName: string
  trackProduct: string
  title: string
  description: string
  guides?: Array<{ href: string; contentType: string | null; title: string; intro: string }>
}

export type ProductGuidesContextT = {
  title: string
  intro: string
  learningTracks: Array<LearningTrack>
}

export const ProductGuidesContext = createContext<ProductGuidesContextT | null>(null)

export const useProductGuidesContext = (): ProductGuidesContextT => {
  const context = useContext(ProductGuidesContext)

  if (!context) {
    throw new Error(
      '"useProductGuidesContext" may only be used inside "ProductGuidesContext.Provider"',
    )
  }

  return context
}
