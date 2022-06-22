import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import PopularityAsc from "../components/PopularityAsc";
// import Sidebar from "../components/Sidebar";

const Navigation = (props) => {
  const [input, setInput] = useState("");
  const { id } = useParams();

  const options = [
    { value: <Link to={`/popularityAsc `} />, label: "Filter 1" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

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

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="navigation">
      <Link to={`/ `} className="headerLink">
        <h1>
          <span>.</span>MOWEE
        </h1>
      </Link>
      <div className="searchbar">
        <input
          type="text"
          name="search"
          id="searchbar"
          placeholder="MoWee eingeben"
          onChange={props.onChange}
        />
        <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
      </div>
      {/* <div className="hamburgermenu">
        <Link to={`/popularityasc `}>
          <h1>
            <span>.</span>Beliebtheit aufsteigend
          </h1>
        </Link>
        <Link to={`/popularitydesc `}>
          <h1>
            <span>.</span>Beliebtheit absteigend
          </h1>
        </Link>
        <Link to={`/releaseasc `}>
          <h1>
            <span>.</span>Release Datum aufsteigend
          </h1>
        </Link>
        <Link to={`/releasedesc `}>
          <h1>
            <span>.</span>Release Datum absteigend
          </h1>
        </Link>
        <Link to={`/voteaverageasc `}>
          <h1>
            <span>.</span>Bewertung aufsteigend
          </h1>
        </Link>
        <Link to={`/voteaveragedesc `}>
          <h1>
            <span>.</span>Bewertung absteigend
          </h1>
        </Link>
      </div> */}
    </div>
  );
};

export default Navigation;
