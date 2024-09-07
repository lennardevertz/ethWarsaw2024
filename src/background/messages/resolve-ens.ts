import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"
import { normalize } from "viem/ens"

import type { PlasmoMessaging } from "@plasmohq/messaging"

const client = createPublicClient({
  chain: { ...mainnet, fees: undefined },
  transport: http()
})

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  if (req.body.domain) {
    const resolvedAddress = await client.getEnsAddress({
      name: normalize(req.body.domain)
    })
    res.send(resolvedAddress)
  } else if (req.body.address) {
    const resolvedName = await client.getEnsName({
      address: req.body.address
    })
    res.send(resolvedName)
  }
}

export default handler
