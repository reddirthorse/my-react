import React from "react";

function MovieData({
                       id,
                       title,
                       year,
                       runtime,
                       summary,
                       description_full,
                       synopsis,
                       background_image}){
    return(
        <div className="movie">
            <div className = "id">id:{id}</div>
            <div className = "title">title:{title}</div>
            <div className = "year">year:{year}</div>
            <div className = "runtime">runtime:{runtime}</div>
            <div className = "summary">summary:{summary}</div>
            <div className = "description_full">description_full:{description_full}</div>
            <div className = "synopsis">synopsis:{synopsis}</div>
            <div className = "background_image">synopsis:{background_image}</div>

        </div>
    )
}
export default MovieData;