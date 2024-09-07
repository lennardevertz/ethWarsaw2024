import type { ComponentType, FC } from "react"

import { WithQueryClient } from "./with-query-client"

export const withProviders = (Component: ComponentType): FC => {
  return () => {
    console.log('inside with providers');
    return (
      <WithQueryClient>
        <Component />
      </WithQueryClient>
    )
  }
}
