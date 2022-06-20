// import { Link, useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

const Suche = () => {

    // const { name } = useParams();
    // const [single, setSingle] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=80fc0be7bcb18707550c86f288ec17fe&language=en-US`)
    //         .then(response => response.json())
    //         .then(json => {
    //             setSingle([json])
    //             console.log(json)
    //         });
    // }, [])

    // console.log(single)

    return (<div>
        {/* {single.map((elt, i) =>
            <div key={i}>
                <h1>{elt.name}</h1>
                <img src={elt.sprites.other.dream_world.front_default} alt="" />
                <p>Height: {elt.height}</p>
                {elt.types.map((elt2, i) =>
                    <p key={i}>Type {i}: {elt2.type.name}</p>
                )}
            </div>
        )}
        <Link to='/'>Back</Link>
 */}

    </div>);
}

export default Suche;