import axios from './axios';
import requests from './Request';
import React, {useEffect, useState} from 'react'
import "./Banner.css"


export default function Banner() {

const [movie,setMovie]= useState([]);
useEffect(()=>{
    async function fetchData(){
      const request= await axios.get(requests.fetchTrending);
      setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length-1)]);
        return request;
    }
    fetchData();
},[])




  function truncate(string, n){
    return string?.length >n ? string.substr(0, n-1)+"...":string
  }
  return (
    <>
    <header className="banner" style={ {backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}}>
      <div className="banner-content">
        <h1 className="banner-title">{movie.original_title}</h1>
        <span className='releaseyear'>{movie.release_date}</span>
        <div className="banner-buttons">
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className="banner-des">{truncate(`${movie.overview}`,230)} </h1>
      </div>
      
    </header>
    
    </>
  )
}
