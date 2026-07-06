import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Details() {

    const [embedurl, setEmbedurl] = useState();
    const [movie, setMovie] = useState([]);

    const getdetails = (details) => {
        setMovie(details);
    }

    const showtrailer = (videoid) => {
        let _url = `https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1`;
        setEmbedurl(_url);
    }

    const gettrailer = async (title) =>{
        const key = "AIzaSyA4275CfDpDzNWkzNkH5ruRF3p1bC6m9xI";
        const query = encodeURIComponent(`${title} official trailer`);
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video$maxResults=1&key=${key}`;

        try{
            const res = await fetch(url);
            const data = await res.json();
           showtrailer(data.items[0].id.videoId);
        } catch(error) {
            console.error("error", error);
        }
    }

    const { id } = useParams();

     const getdata = async (id) => {
        const res = await fetch(`http://www.omdbapi.com/?apikey=2af2d63b&i=${id}`);
        const data = await res.json();
        gettrailer(data.Title);
        getdetails(data);
     }

     useEffect(()=>{
        getdata(id);
     }, [id]);

     console.log(movie);

    return (
    <>
  
      <iframe className='trailer' frameborder="0" allow="autoplay; encrypted-media" src={embedurl} allowFullScreen></iframe>
       
      <div className='other_details'>
        <h1>{movie.Title}</h1>
        <ul>
            <li>{movie.Year}</li>
            <li>{movie.Rated}</li>
            <li>{movie.Runtime}</li>
            <li>{movie.Language}</li>
            <li>{movie.imdbRating}</li>
        </ul>
        <div className='plot'>
        <p>{movie.Plot}</p>
        </div>

        <p>{movie.Genre}</p>

        <button onClick={()=> window.location.href=`https://www.hotstar.com/in/explore?search_query=${movie.Title}`}>Watch on Jio Hotstar</button>
      </div>
    
    </>
    )
}