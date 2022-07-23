import styles from "../styles/messagebar.module.css"
import {ethers, Wallet} from 'ethers'
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/useContext";
import {Scrollbars} from "react-custom-scrollbars"


export default function MessageBarDM(){
    const {user} = useContext(UserContext)

    const [messageStream, setMessageStream] = useState([])
    console.log(user.messages);



    return(  
        

   <Scrollbars className={styles.messagebar__dms} style={{ height: "80vh" }}>
{user.messages.map((message)=>{

        return(
            <>
        {true && (
          
            <div className={styles.singleMessageRight}> 

        
                {message.content}

                
            </div>
        
                
                )
                
                }
          
        {message.senderAddress != user.address && ((<div className={styles.singleMessageLeft}> 
                    {message.content}
                </div>))}
         </>
        )
                
            

           
        })}
   </Scrollbars>

   
        

    
    )

}