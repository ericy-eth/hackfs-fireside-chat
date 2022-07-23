import { Client } from '@xmtp/xmtp-js'
import { Wallet } from 'ethers'

function run(){


// You'll want to replace this with a wallet from your application
const wallet = Wallet.createRandom()
// Create the client with your wallet. This will connect to the XMTP development network by default
const xmtp = await Client.create(wallet)
// Start a conversation with Vitalik
const conversation = await xmtp.conversations.newConversation(
  '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
)
// Load all messages in the conversation
const messages = await conversation.messages()
// Send a message
await conversation.send('gm')
// Listen for new messages in the conversation
for await (const message of await conversation.streamMessages()) {
  console.log(`[${message.senderAddress}]: ${message.text}`)
}
}

try{
    run()
}catch(e){
    console.log(e.message);
}