import { Client } from '@xmtp/xmtp-js'
import { Wallet } from 'ethers'

function run(){
console.log("Running run");

// You'll want to replace this with a wallet from your application
const wallet = Wallet.createRandom()
// Create the client with your wallet. This will connect to the XMTP development network by default
const xmtp = await Client.create(wallet)
// Start a conversation
const conversation = await xmtp.conversations.newConversation(
  '0x75D853392593a8d8900d6F3f49fF7af8f9515cab'
)
// Load all messages in the conversation
// const messages = await conversation.messages()
// Send a message
await conversation.send('gm')
// Listen for new messages in the conversation
// for await (const message of await conversation.streamMessages()) {
//   console.log(`[${message.senderAddress}]: ${message.text}`)
// }
}

try{
    run()
}catch(e){
    console.log(e.message);
}