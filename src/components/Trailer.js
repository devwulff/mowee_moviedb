import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Trailer = () => {
  const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
  const { id } = useParams();
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?&api_key=${apiKey}`)
      .then((response) => response.json())
      .then((json) => setTrailer(json.results));
  }, [id]);

  return (
    <div>
      <div>
        {trailer.map((elt, i) => {
          if (
            (elt.type === "Trailer" && elt.name === "Official Trailer") ||
            elt.name === "Trailer"
          ) {
            return (
              <div key={i}>
                <h3>Trailer</h3>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${elt.key}?vq=hd1080`}
                  title="Trailer Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                  allowFullScreen
                ></iframe>
                {/* <iframe
                  src={`https://www.youtube-nocookie.com/embed/${elt.key}?vq=hd1080&hl=de-DE&color=white`}
                  width="560"
                  height="315"
                  title="Trailer Player"
                  frameBorder="0"
                  allowfullscreen
                ></iframe> */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Trailer;
