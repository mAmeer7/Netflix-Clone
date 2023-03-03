import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css'

export default function Row({title, fetchUrl, isLargeRow=false}) {
        const base_url="https://image.tmdb.org/t/p/original/"
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
            async function fetchData(){
                const request= await axios.get(fetchUrl)
                setMovies(request.data.results);
                return request
            }
            fetchData();
    },[fetchUrl])

        

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="card">

        {movies.map((x)=>{return <img className="row-image" key={x.id
        } src={`${base_url}${x.poster_path}`} alt="" /> })}
        </div>
        
       
    </div>
  )
}
