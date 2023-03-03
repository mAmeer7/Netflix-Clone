import React, { useEffect } from 'react';
import './App.css'
import HomeScreen from './homescreen';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LoginScreen from './LoginScreen';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';



function App() {
  const user=useSelector(selectUser);
  const dispatch= useDispatch();

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(userAuth)=>{
    if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email
        }))
    }else{
      dispatch(logout());
    }
  })
return unsubscribe;
},[dispatch])

  return (
   
       <>
       <div className="app">
       

       <BrowserRouter>
      {!user? <LoginScreen/>:<Routes>
        <Route exact path='/profile' element={<ProfileScreen/>}/>
        <Route exact path="/" element={<HomeScreen/>}/>
        </Routes>}

        
       </BrowserRouter>
    
       </div>
      
       
       </>
  );
}

export default App;
