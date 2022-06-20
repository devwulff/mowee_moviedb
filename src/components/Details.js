import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Details = () => {

    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=80fc0be7bcb18707550c86f288ec17fe&language=de-DE`)
            .then(response => response.json())
            .then(json => setDetails(json))
    }, [id])

    console.log(details);

    return (<div>
        <h1>Ich bin eine Detailseite</h1>
        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="Foto zum Film" />
        <h2>{details.title}</h2>
        <div>
            <h3>Original Titel:</h3>
            <p>{details.original_title}</p>
        </div>
        <div>
            <h3>Überblick:</h3>
            <p>{details.overview}</p>
        </div>
        <Link to="/">Home</Link>

    </div>);
}

export default Details;