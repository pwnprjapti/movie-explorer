import MovieCard from './MovieCard'
import React from 'react'

export default function List({ movies }){

    return (
        <>
          <div className="list">
             {movies.map((movie)=>(
                <MovieCard key={movie.imdbID} id={movie.imdbID} movie={movie} />
             ))}
          </div>
        </>
    )
}
