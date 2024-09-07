import type { ComponentType, FC } from "react"

import { WithQueryClient } from "./with-query-client"

export const withProviders = (Component: ComponentType): FC => {
  return () => {
    return (
      <WithQueryClient>
        <Component />
      </WithQueryClient>
    )
  }
}
