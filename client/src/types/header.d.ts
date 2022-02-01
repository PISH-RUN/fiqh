import { ReactNode } from "react"

declare global {
  type MenuItemType = {
    key: string
    text: string
    route: string
    subMenu?: MenuItemType[]
  }
  type LayoutType = {
    children: ReactNode
  }
}

export default global
