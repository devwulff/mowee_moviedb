import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [input, setInput] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (input.length > 1) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?&query=${input}&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => {
          setInput([data]);
        });
    }
  }, [input]);
  // console.log(input);

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Navigation Placeholder</h1>
      <Link to={`/ `}>
        <button className="button">HOME</button>
      </Link>
      <form action="">
        <div>
          <i className="las la-search"></i>
          <input
            class="input-field"
            className="inputsearch"
            type="text"
            name="search"
            id="searchbar"
            placeholder="Type Movie here"
            onChange={props.onChange}
          />
        </div>
      </form>
      {/* <Link className="btn" to={`search/${input}`}>
        Search
      </Link> */}
    </div>
  );
};

export default Navigation;

// https://api.themoviedb.org/3/search/movie?&query=${input}&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&page=1&include_adult=false
