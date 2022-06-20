// API Key: 30428c935fc016fd342172f7c0bc3422;
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=30428c935fc016fd342172f7c0bc3422&language=de&page=1')
            .then(res => res.json())
            .then(json => {
                setMovies(json.results)
            })
    }, [])
    console.log(movies);


    return (<section className="movielist">
        {
            movies.map((ele, i) =>
                <MovieCard
                    key={i}
                    title={ele.title}
                    overview={ele.overview}
                    vote_average={ele.vote_average}
                    poster_path={ele.poster_path}
                // author={ele.author}
                // publishedAt={ele.publishedAt}
                // description={ele.description}
                // urlToImage={ele.urlToImage}
                // content={ele.content}
                // url={ele.url}
                />
            )
        }
    </section>);
}

export default MovieList;