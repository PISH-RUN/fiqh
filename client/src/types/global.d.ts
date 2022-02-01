import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"

declare global {
  type NextPageWithLayout = NextPage & {
    layout?: string
  }

  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }
}

export default global
