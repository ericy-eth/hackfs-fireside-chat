import styles from "../styles/dms.module.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Alert from '@mui/material/Alert';
import { useContext } from "react";
import { UserContext } from "../context/useContext";
import { Client } from '@xmtp/xmtp-js'
import {parse, stringify} from 'flatted/esm'
import Contact from "./contact"



export default function DMS(){

    const {user, setUser} = useContext(UserContext)

    const [isRegistered, setIsRegistered] = useState(true)


    //Tracks what the address the user enters
    const [friend, setFriend] = useState("")

    const [contactList, setContactList] = useState([])


    async function initializeConversations(){

        if(contactList.length == 0){
            let xmtp = user.xmtp

            let allConversations = await xmtp.conversations.list()
           
            console.log('all convos initialization:', allConversations);
        
            setContactList(prevList => ([...allConversations]))
        }
        

    }

    initializeConversations()


   

    function handleChange(event){
        setFriend(event.target.value)
    }

   async function sendFriendReq(event){
       
        event.preventDefault()
        
        if(ethers.utils.isAddress(friend)){

            try{
                
                let xmtp = user.xmtp


                //Start a new conversation
                const conversation = await xmtp.conversations.newConversation(
                    friend
                )

                let allConversations = await xmtp.conversations.list()

                setContactList(prevList => ([...allConversations]))
                
                setFriend("")
                setIsRegistered(true)
            }catch(e){
                console.log(e.message);
                console.log("User is not registered");
                setIsRegistered(false)
            }
        
       }else{
        console.log("Please enter a valid address");
     
       
       }
    }

    return(
        <>
        {!isRegistered &&     
        <Alert variant="outlined" severity="info">
        This User is not Registered!
        </Alert>}
    
        <div className={styles.dms}>
    
        
            <div className={styles.dms__top}>
            <AccountCircleIcon className={styles.account}/>
           
                <form onSubmit={sendFriendReq}>

                    <input className={styles.input} name="friend" onChange={handleChange} placeholder='Add Friends' value={friend} autoComplete="off"/>
                    <button type='submit' className={styles.dms__addFriend}/>
                        
                   
                </form>


            </div>
            {contactList.map((conversation, index)=>{
                return <Contact key={index} conversation={conversation}/>

            })}
        </div>
        </>
    )
}