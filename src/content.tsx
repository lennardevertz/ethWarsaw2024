import { useQuery } from "@tanstack/react-query"
import cssText from "data-text:~style.css"

import { sendToBackground } from "@plasmohq/messaging"

import { withProviders } from "~providers"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const ContentScript = () => {
  const getStarWarsQuery = useQuery({
    queryKey: ["get-star-wars"],
    queryFn: () => {
      return sendToBackground({
        name: "get-star-wars"
      })
    }
  })

  return (
    <div className="absolute top-20 left-20 bg-green-300 text-black">
      {JSON.stringify(getStarWarsQuery.data)}
    </div>
  )
}

export default withProviders(ContentScript)
