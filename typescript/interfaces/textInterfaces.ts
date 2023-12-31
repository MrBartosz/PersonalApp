export interface IRecipeText {
  children?: React.ReactNode
  fontSize: number
  fontWeight?: number
  color?: string
  lineHeight?: number
  letterSpacing?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  opacity?: number
  marginLeft?: number
  textDecorationLine?: string
  textAlign?: 'auto' | 'center' | 'left' | 'right' | 'justify'
}

export interface IContentCard {
  year: string
  content: string
}

export interface IContentHome {
  children: string
}
