import { Link } from 'react-router-dom'

export default function moviecard( { movie, id }){

    return(
        <>
          <div className="card">
            <img alt={movie.title} src={movie.Poster} />
            <p>TITLE : {movie.Title}</p>
            <p>TYPE : {movie.Type}</p>
            <p>YEAR : {movie.Year}</p>
            <Link to={id} className='link'>show details</Link>
          </div>
        </>
    )
}