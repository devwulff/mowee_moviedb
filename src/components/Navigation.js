import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


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

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="navigation">
      {/* <h1>MoWee - Your Movie Search</h1> */}
      <Link to={`/ `} className="headerLink">
        {/* <button className="button">HOME</button> */}
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
    </div>
  );
};

export default Navigation;
