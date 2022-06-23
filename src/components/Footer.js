import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import tmbdlogo from "../images/logo_the_movie_db.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <h1>
        <span>.</span>MOWEE
      </h1>
      <p>Imprint</p>
      <div>
        {/* eslint-disable-next-line */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.themoviedb.org/"
        ></a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/_moweedatabse/"
        >
          <FontAwesomeIcon className="insta" icon={faInstagram} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.themoviedb.org/">
          <FontAwesomeIcon className="fbook" icon={faFacebookF} />
        </a>
      </div>
      <div className="tmdblogo">
        <img className="tmdbpic" src={tmbdlogo} alt="TmDB Logo" />
      </div>
    </footer>
  );
};

export default Footer;
