import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import Navigation from "./Navigation";
import Sidebar from "../components/Sidebar";

const Popular = () => {
  const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
  const [popular, setPopular] = useState([]);

  useEffect(() => {
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
        <main className="main">
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
        </main>
      </div>
    </div>
  );
};

export default Popular;
