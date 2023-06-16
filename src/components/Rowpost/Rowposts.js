import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../Constants/Constants'
function Rowpost(props) {
  const [movies,setMovies]=useState([])
  const[urlid,seturlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((Response)=>{
      console.log(Response.data);
      setMovies(Response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
   console.log(id);
   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data);
    if(response.data.results.length!==0){
      seturlId(response.data.results[0])
    }else{
      console.log('Array empty');
    }
   })
  }
  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className='posters'>
      {movies.map((obj)=>
       <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} alt='poster' src= {`${imageUrl+obj.backdrop_path}`}/>
     
      )}
      </div>
     { urlid &&  <Youtube opts={opts} videoId={urlid.key}/>} 
    </div>
  )
}

export default Rowpost
