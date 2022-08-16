import { Client } from '@xmtp/xmtp-js'

import { useContext } from 'react'
import { UserContext } from '../context/useContext'
import { ethers } from 'ethers'
import { useEffect } from 'react'
import styles from '../styles/login.module.css'
import {parse, stringify} from 'flatted/esm'
import { connect } from "@tableland/sdk";
import { create } from 'ipfs-http-client'

const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner()
      const address = await signer.getAddress()

      const xmtp = await Client.create(signer)


      if (accounts.length !== 0) {
        const account = accounts[0];
        

        console.log("Found an authorized account:", account);
        setUser({address: address, signer: signer, provider: provider, account: account, xmtp: xmtp, showDMS: false, conversation:[]});
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
}

export default function Login(){

    const {user, setUser} = useContext(UserContext)
    const WEB3_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE3N2Q4MjAwZkZiOTU5YzEzNTY2ODJhMDkzMjdlMzYyQ0I5Y2RmY2UiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTgyMDYzNTE0MTQsIm5hbWUiOiJIYWNrRlMifQ.lb0dpVbIyf7XA9rZziCF8ojtWA8UD_mey5B1vOxHB3E"

    // const initializeTableland = async () =>{
    //     if('tableland' in localStorage){
    //         console.log("Tableland instance has been initialized");
            
    //     }else{
    //         const tableland = await connect({network:"testnet", chain: "polygon-mumbai"})
    //         localStorage.setItem('tableland', JSON.stringify(tableland))
    //     }
    // }

    // initializeTableland()

    const createTable = async () =>{
        // Main Table: fireside_80001_503

            //Initialize table:
            const tableland = await connect({network:"testnet", chain: "polygon-mumbai"})
        
            const { name } = await tableland.create(
        
            `id int, address text, username text,  servers text, primary key (id)`, // Table schema definition
        
            `fireside` // Optional `prefix` used to define a human-readable string
        
            );

            console.log("New table created named: ", name);
    }
  
    //Functions
    const connectWallet = async ()=>{
        try{
            const {ethereum} = window
    
            if(!ethereum){
                console.log("No metamask detected");
                return
            }
    
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            const account = accounts[0]
            //Get the signer
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = await provider.getSigner()
            
            //Get the address of the user
            const address = await signer.getAddress()
    
            //Initialize xmtp client:
            const xmtp = await Client.create(signer)

   
       
           




            //Set current account and signature globaly:
            setUser({address: address, signer: signer, xmtp: xmtp, showDMS: false})
            

    
            
        }catch(e){
            console.log(e.message);
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
          const { ethereum } = window;
    
          if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
          } else {
            console.log("We have the ethereum object", ethereum);
          }
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = await provider.getSigner()
          const address = await signer.getAddress()

          const xmtp = await Client.create(signer)


          if (accounts.length !== 0) {
            const account = accounts[0];
            

            console.log("Found an authorized account:", account);
            setUser({address: address, signer: signer, xmtp: xmtp, showDMS: false});
          } else {
            console.log("No authorized account found")
          }
        } catch (error) {
          console.log(error);
        }
    }


 

    // useEffect(()=>{
    //     checkIfWalletIsConnected()
    // }, [])





    return (
   
        <div className={styles.login}>
       
        <h1 className={styles.title}>Fireside Chat 🔥</h1>

        <button onClick={createTable} className={styles.button}>
            Create Table
        </button>

        {/* <button onClick={connectWallet} className={styles.button}>
            <b>Log In</b>
        </button> */}
        
        </div>
        
        
    )

}
export {checkIfWalletIsConnected}
