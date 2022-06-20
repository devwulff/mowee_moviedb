import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Navigation Placeholder</h1>
      <Link to={`/ `}>
        <button className="button">HOME</button>
      </Link>
      <input
        type="text"
        name="search"
        id="searchbar"
        placeholder="Type Movie here"
        onChange={(e) => setInput(e.target.value)}
      />
      <Link className="btn" to={`/MovieItem/${input}`}>
        Search
      </Link>
    </div>
  );
};

export default Navigation;

// https://api.themoviedb.org/3/search/movie?&query=${input}&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&page=1&include_adult=false
