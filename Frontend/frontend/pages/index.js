import styles from '../styles/Home.module.css'
import Sidebar from './sidebar'
import Middle from './middle'
import MessageBar from './messagebar'
import Login from './login'
import {useEffect, useState} from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/useContext'
import { ethers } from 'ethers'



export default function Home() {


  const {user, setUser} = useContext(UserContext)

    
  if(!user.address){
    return(
     <Login/>
    )
  }else{

    return (
      <div className={styles.app}>
        <Sidebar/>
        <Middle/>
        <MessageBar/>

       

      </div>
    )
  }
 
}
