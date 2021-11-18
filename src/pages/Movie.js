import React from "react";
import { NavLink, useParams, useSearchParams,useLocation } from "react-router-dom";
import movieData from '../MovieData'

function Movie(){
    const params = useParams();
    return(
        <>
            <h1>MOVIE PAGE</h1>
            <h2>This is Movie</h2>
        </>
    )


    // let [searchParams, setSearchParams] = useSearchParams()


}

export default Movie