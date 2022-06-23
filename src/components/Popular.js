import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import Navigation from "./Navigation";
import Sidebar from "../components/Sidebar";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=de-DE&page=1`
    )
      .then((response) => response.json())
      .then((json) => setPopular(json.results));
  }, []);

  return (
    <div id="outer-container">
      <div id="page-wrap">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-cobtainer"}
        />
        <Navigation />
        <h1>Neuerscheinungen</h1>
        <div className="movie-list">
          {popular.map((elt, i) => {
            return (
              <MovieItem
                key={elt.id}
                id={elt.id}
                title={elt.title}
                year={elt.release_date.slice(0, 4)}
                img={elt.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
