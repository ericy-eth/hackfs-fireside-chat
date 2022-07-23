import styles from "../styles/contact.module.css"
import { useContext } from "react";
import { UserContext } from "../context/useContext";

export default function Contact({index, conversation}){

    const {user, setUser} = useContext(UserContext)
    console.log(user);

    const shortenAddress = (str) => {
        return str.substring(0, 6) + "..." + str.substring(str.length - 4);
      };

    let shortenedAddress =  shortenAddress(conversation.peerAddress.toString())
    console.log(shortenedAddress);
    
    const loadMessages = async ()=>{
        const messages = await conversation.messages()
        console.log("inside contacts", conversation);
        setUser({signer: user.signer, address: user.address, xmtp: user.xmtp, showDMS: true, conversation: conversation, messages: messages, showDMS__message: true })
    }

    return(
        <div className={styles.contact} onClick={loadMessages}>
            {shortenedAddress}
        </div>

    )
}