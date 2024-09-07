import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const responseBody = await (
    await fetch("https://api.brianknows.org/api/v0/agent/transaction", {
      method: "POST",
      headers: {
        "X-Brian-Api-Key": process.env.BRIAN_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: req.body.prompt,
        address: req.body.address
      })
    })
  ).json()
  res.send(responseBody)
}

export default handler
