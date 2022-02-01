import { useRouter } from "next/router"
import { useEffect } from "react"
import Blog from "src/app/container/blog"

const Home: NextPageWithLayout = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/blog")
  }, [])
  return <Blog />
}

Home.layout = "main"

export default Home
