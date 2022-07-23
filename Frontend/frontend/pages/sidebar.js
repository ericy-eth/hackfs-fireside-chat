
import styles from "../styles/sidebar.module.css"
import Server from "./server"
import {Scrollbars} from "react-custom-scrollbars"
import { useState, useEffect } from "react"
import { useContext } from "react"
import { UserContext } from "../context/useContext"

export default function Sidebar(){
    
    let [servers,setServers] = useState([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]])
    const {user,setUser} = useContext(UserContext)


    async function showDMS(){
        const conversation = await user.xmtp.conversations.list()
        setUser({address: user.address, signer:user.signer, xmtp: user.xmtp, showDMS: true})

    }
    return(
        <div className={styles.sidebar}>

                <button className={styles.load__dm} onClick={showDMS}>
                    DM
                </button>
                {servers.map((server, index)=>{
                    return <Server key={index} server={server}/>

                })}

        </div>
    )
}