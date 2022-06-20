// 80fc0be7bcb18707550c86f288ec17fe

const MovieItem = (props) => {
  return (
    <div className="moviecard">
      <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="" />
      <p>{props.year}</p>
      <h2>{props.title}</h2>
    </div>
  );
};

export default MovieItem;
