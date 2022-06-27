import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import {Routes,Route} from 'react-router-dom'
import LoginPage from '../pages/Login'
import HomePage from '../pages/Home'
import User from './ListUser/index'
import Posting from './ListPosting/index'


const Menu = () => {

  const [loginStatus, setLoginStatus] = useState(false)

  const loginCbHandler = (result)=>{
    setLoginStatus(result)
  }
  useEffect(()=>{
    if(localStorage.getItem('access_token')){
      setLoginStatus(true)
    }
    else{
      setLoginStatus(false)
    }
  },[loginStatus])

  return (
    <>
        <div className = 'container-fluid'>
      <Routes>
        
          if(loginStatu){
          <Route path = "/home" element = {<Posting loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></Posting>}></Route>
          }
          else{
          <Route path = "/login" element = {<LoginPage loginCbHandler = {loginCbHandler}></LoginPage>}></Route>
          }
          
          else{
             <Route path = "/user" element = {<User loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></User>}></Route>
          }
          
      </Routes>
      
    </div>
    </>
  )
}

export default Menu