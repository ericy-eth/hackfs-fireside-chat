
import { useContext } from "react";
import { UserContext } from "../context/useContext";
import styles from "../styles/messagebar.module.css"
import {Scrollbars} from "react-custom-scrollbars"

export default function MessageBarServer(){
    const {user} = useContext(UserContext)


    return (
        <Scrollbars className={styles.messagebar__dms} style={{ height: "80vh" }}>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>
            <p>YO</p>

           </Scrollbars>
    )

}