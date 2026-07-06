import { useRef } from 'react'

export default function search({ getdata }){
          let search = useRef()

          const handleSearch = (e) =>{
               e.preventDefault();

               let value = search.current.value;

               getdata(value);
          }

    return (
        <>
         <div className="search">
            <input ref={search} type="text" className="query" placeholder="enter a title..." />
            <button onClick={handleSearch}>Search</button>
         </div>
        </>
    )
}