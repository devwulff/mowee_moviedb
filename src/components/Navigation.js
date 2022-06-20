import { useState, useEffect } from "react";
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
        placeholder="Type anything here"
        onChange={(e) => setInput(e.target.value)}
      />
      <Link className="btn" to={`/details/${input}`}>
        Search
      </Link>
    </div>
  );
};

export default Navigation;
