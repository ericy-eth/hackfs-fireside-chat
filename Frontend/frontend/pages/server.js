import Image from "next/image"
import { connect } from "@tableland/sdk";
import { useContext } from "react";
import { UserContext } from "../context/useContext";


export default function Server({server}){

    const {user, setUser} = useContext(UserContext)


    //Triggers the server middle pannel to load
    function loadServer(){
        setUser({address: user.address, signer:user.signer, xmtp: user.xmtp, showServers: true})



    }
    return(
       <img onClick={loadServer} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1200px-Circle_-_black_simple.svg.png" width={50} height={50} alt="" />

    )
}