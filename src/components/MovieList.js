import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

const MovieList = (props) => {
  const [details, setDetails] = useState([]);
  let link;

  useEffect(() => {
    if (props.change) {
      link = `https://api.themoviedb.org/3/search/movie?&query=${props.change}&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&page=1&include_adult=false`;
    } else {
      link = `https://api.themoviedb.org/4/list/8207676?page=1&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&append_to_response=videos,images`;
    }
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.results);
      });
  }, [props.change]);

  return (
    <div>
      {details.map((elt, i) => {
        return (
          <MovieItem
            key={elt.id}
            id={elt.id}
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
