// 80fc0be7bcb18707550c86f288ec17fe

const MovieItem = (props) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="" />
      <h2>{props.title}</h2>
      <p>{props.year}</p>
    </div>
  );
};

export default MovieItem;
