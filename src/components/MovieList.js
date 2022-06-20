import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

const MovieList = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/4/list/8207676?page=1&api_key=80fc0be7bcb18707550c86f288ec17fe&language=de-DE&append_to_response=videos,images'
        )
            .then((response) => response.json())
            .then((data) => {
                setDetails(data.results);
            });
    }, []);
    console.log(details[0]);

    return (

        <div>
            {details.map((elt, i) => {
                return (
                    <MovieItem

                        key={i}
                        title={elt.title}
                        year={elt.release_date}
                        img={elt.poster_path}
                    />
                );
            })}
        </div>

    );
};
export default MovieList;