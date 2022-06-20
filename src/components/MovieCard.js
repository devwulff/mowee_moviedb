
const MovieCard = (props) => {

    return (<div className="moviecard">
        <img src={`https://image.tmdb.org/t/p/w185/${props.poster_path}`} alt="" />
        <h3>{props.title}</h3>
        <p>{props.overview}</p>
        <p>Rating: {props.vote_average}</p>
        {/* <h5>Written by {props.author}, published at {props.publishedAt}</h5>
        <img src={props.urlToImage} alt="" />
        <h4>{props.content}</h4>
        <a href={props.url}>Read more</a> */}
    </div>);
}

export default MovieCard;