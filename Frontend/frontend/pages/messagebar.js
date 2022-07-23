import styles from "../styles/messagebar.module.css"
import {ethers, Wallet} from 'ethers'
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/useContext";
import MessageBarDM from "./messagebar__DM";
import MessageBarServer from "./messaagebar__Server";
import { checkIfWalletIsConnected } from "./login";


export default function MessageBar(){
    const shortenAddress = (str) => {
        return str.substring(0, 6) + "..." + str.substring(str.length - 4);
      };

    const {user} = useContext(UserContext)
    const userAddress = shortenAddress(user.address)
    
    let messagebarTitle = ""

    // if(user.showDMS){
    //     console.log("Peer address", user.conversation.peerAddress);
    //     const senderAddress = shortenAddress(user.conversation.peerAddress)
    //     messagebarTitle = `Conversation with ${senderAddress} `
    // }else{
    //     messagebarTitle = "#Channel 2"
    // }
    //This useState is to keep track of the current message to be sent
    const [message, setMessage] = useState("")



    //This useState is to keep track of the list of incoming messages

 
    //Send Message
    async function sendMessage(event){
        event.preventDefault()
        checkIfWalletIsConnected()
        console.log(message)
        await user.conversation.send(message)

        setMessage("")
    }

    //Update the current input whenver user types something
    function handleChange(event){
        setMessage(event.target.value)
    }

    return(
        <>
        <div className={styles.messagebar}>
        <div className={styles.header}>
        <div className={styles.header__title}>
            {messagebarTitle}
        </div>
          
            <div className={styles.account}>
            {userAddress}
            </div>
          
        </div>

        {user.showDMS__message && <MessageBarDM/>}
        {user.showServers && <MessageBarServer/>}

       
        
       <div>

       <form onSubmit={sendMessage}>

            <input className={styles.input} name="message" placeholder="Send Message" onChange={handleChange} value={message} autoComplete="off">

            </input>
            <button  type="submit" className={styles.message__button}></button>
        </form>
       </div>
        
      
    </div>   
    </>
    )
    
  
  
    
}