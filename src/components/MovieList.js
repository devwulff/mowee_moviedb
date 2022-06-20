import { useState, useEffect } from "react";

const MovieList = () => {
  const [details, setDetails] = useState([]);
  const [img, setImage] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/4/list/8207676?page=1&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&append_to_response=videos,images`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.results);
        setImage([data.results.poster_path]);
      });
  }, []);
  console.log(details);
  // console.log(setImage);

  return (
    <>
      <div>
        <h3>MovieList</h3>
        {details.map((elt, i) => {
          return (
            <div key={i}>
              {/* <p>
                Die 25 besten Filme aller Zeiten:
                {elt.average_rating.toFixed(1)} durchschnittsbewertung
              </p> */}
              <img
                src={`https://image.tmdb.org/t/p/original${elt.poster_path}`}
                alt=""
              />
              <h2>{elt.title}</h2>
              <p>{elt.release_date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MovieList;

// https://api.themoviedb.org/3/list/1?api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE

// https://api.themoviedb.org/4/list/8207676?page=1&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&append_to_response=videos,images&sort_by=vote_average.desc

// https://api.themoviedb.org/3/movie/550?api_key=f609f173487177fd0f9d5d8e5193e2fe
