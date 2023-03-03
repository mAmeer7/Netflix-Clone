import React,{useState, useEffect} from 'react'
import "./Nav.css"
import logo from './img/netflix-logo-png-2562.png'
import avatar from './img/avatar.png'
import {  useNavigate } from 'react-router-dom'


export default function Nav() {
  //routing pages*
  const history = useNavigate();
  //routing pages**
const [show, handle]=useState(false)

function transitionNav(){
    if(window.scrollY > 100){
        handle(true)
    } else{ handle(false)}
}

useEffect(()=>{
window.addEventListener("scroll", transitionNav);
return () => window.removeEventListener('scroll',transitionNav);

},[])


  return (
    <div className={`nav ${show ?"nav_black":"" }`}>
        <div className="nav_content">
        <img onClick={()=>history('/')} id='logo' src={logo} alt="" />
        <img onClick={()=>history('/profile') } id ="avatar" src={avatar} alt="" />
        </div>
        
        
       
        </div>
  )
}
