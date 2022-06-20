import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

const MovieList = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/4/list/8207676?page=1&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&append_to_response=videos,images`
        )
            .then((response) => response.json())
            .then((data) => {
                setDetails(data.results);
            });
    }, []);

    return (
        <main className="main">
            <h1>Greatest Movies of all Time</h1>
            <div className="movie-list">
                {details.map((elt, i) => {
                    return (
                        <MovieItem
                            key={i}
                            year={elt.release_date}
                            title={elt.title}
                            img={elt.poster_path}
                        />
                    );
                })}
            </div>
        </main>
    );
};
export default MovieList;
