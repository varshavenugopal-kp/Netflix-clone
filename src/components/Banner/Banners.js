import React, { useState } from 'react'
import {API_KEY} from '../../Constants/Constants'
import axios from '../../axios'
import { imageUrl } from '../../Constants/Constants'
import './Banners.css'
import { useEffect } from 'react'

function Banner() {
  const [movie,setMovie]=useState()
  const index=parseInt(Math.random()*100)%20
  useEffect(()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(index);
      setMovie(response.data.results[index])
     })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
