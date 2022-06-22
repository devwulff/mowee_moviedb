import { Link } from "react-router-dom";

const MovieItem = (props) => {
  return (
    <div className="moviecard">
<<<<<<< HEAD
      <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="" />
      <p>{props.year}</p>
      <h2>{props.title}</h2>
=======
      <Link to={`/details/${props.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.img}`}
          alt="Bild des Films"
        />
        <h2>{props.title}</h2>
        <p>{props.year}</p>
      </Link>
>>>>>>> pascal
    </div>
  );
};

export default MovieItem;
