import { ReactNode } from "react"

declare global {
  type BlogCardType = {
    imgUrl: string
    tag: string
    author: string
    time: string
    comments: string[]
    title: string
    description: string
    variant?: string
    style?: any
    index?: number
  }
  type BlogCardV2Type = {
    tag: string
    author: string
    time: string
    comments: string[]
    title: string
    description: string
    variant?: string
    style?: any
    index?: number
  }

  type BlogTitle = {
    text: string
    leftElement?: ReactNode
    variant?: string
  }

  type TagType = {
    name: string
    imgUrl: string
  }
}

export default global
