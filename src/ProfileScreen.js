import React from 'react'
import Nav from './Nav'
import './ProfileScreen.css'
import avatar from './img/avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'

export default function ProfileScreen() {
    const user= useSelector(selectUser)
  return (
    <div className="profilescreen">
       <Nav/>

       <div className="ps-body">
        <h1>Profile Info</h1>
        <div className="ps-info">
            <img src={avatar}alt="" />
            <div className="ps-details">
                <h2>Email : <span>{user.email}</span></h2>
                <div className="ps-plans">
                    <h4>Plan: <span>Premium</span></h4>

                    <button onClick={()=> auth.signOut()} className="ps-signout">
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}
