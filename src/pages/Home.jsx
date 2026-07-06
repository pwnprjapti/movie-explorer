import Search from '../components/search'
import { useState, useEffect } from 'react'
import List from '../components/List'


export default function Home() {

    let [movies, setMovies] = useState([]);
    
      const getdata = async (query) => {
    
        const res = await fetch(`https://www.omdbapi.com/?apikey=2af2d63b&s=${query}`);
        const data = await res.json();
        setMovies(data.Search || []);
      }
    
      useEffect(()=> {getdata("action")}, []);
    
    //   console.log(movies)

      return (
        <div>
          <Search getdata={getdata} />
          {movies.length>0 ? <List movies={movies} /> : <p className='notfound'>Movie not found</p> }
        </div>
      )
}