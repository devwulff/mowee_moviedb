import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [input, setInput] = useState("");

  return (
    <header className="navigation">
      {/* <h1>Navigation Placeholder</h1> */}
      <Link to={`/ `} className="headerLink">
        {/* <button className="button">HOME</button> */}
        <h1><span>.</span>MOV</h1>
      </Link>
      <input
        type="text"
        name="search"
        id="searchbar"
        placeholder="👀 Type Movie here"
        onChange={(e) => setInput(e.target.value)}
      />
      <Link className="btn" to={`/MovieItem/${input}`}>
        Search
      </Link>
    </header>
  );
};

export default Navigation;

// https://api.themoviedb.org/3/search/movie?&query=${input}&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&page=1&include_adult=false
