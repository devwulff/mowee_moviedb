import { Link } from "react-router-dom";

const MovieItem = (props) => {
  if (props.img == null) {
    return (
      <div className="moviecard">
        <Link to={`/details/${props.id}`}>
          <img
            src={`https://cdn.discordapp.com/attachments/988351130201362432/989072612938375189/Fallback_Film_0.png.jpg`}
            alt="Bild des Films"
          />
          <h2>{props.title}</h2>
          <p>{props.year}</p>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="moviecard">
        <Link to={`/details/${props.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${props.img}`}
            alt="Bild des Films"
          />
          <h2>{props.title}</h2>
          <p>{props.year}</p>
        </Link>
      </div>
    );
  }
};

export default MovieItem;
