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
