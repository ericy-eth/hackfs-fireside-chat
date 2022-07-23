import styles from "../styles/middle.module.css"
import DMS from "./dms"
import { useContext } from "react"
import { UserContext } from "../context/useContext"

export default function Middle(){
    const {user, setUser} = useContext(UserContext)

    if(user.showDMS){
        return (
        <div className={styles.middle}>
        <DMS/>
    </div>)
    }else{
        return(
        <div className={styles.middle}>
        <p>
            Channel
        </p>
        <p>
            Channel
        </p> <p>
            Channel
        </p> <p>
            Channel
        </p> <p>
            Channel
        </p>
    </div>)
    }
    
}