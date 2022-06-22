import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import Navigation from "./Navigation";

const ReleaseAsc = () => {
  const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
  const [releaseDateAsc, setReleaseDateAsc] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=de-DE&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((response) => response.json())
      .then((json) => setReleaseDateAsc(json.results));
  }, []);

  return (
    <main className="main">
      <Navigation />
      <h1>Die 20 ältesten Filme</h1>
      <div className="movie-list">
        {releaseDateAsc.map((elt, i) => {
          return (
            <MovieItem
              key={elt.id}
              id={elt.id}
              title={elt.title}
              year={elt.release_date?.slice(0, 4)}
              img={elt.poster_path}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ReleaseAsc;
