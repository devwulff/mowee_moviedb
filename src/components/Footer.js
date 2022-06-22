import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <h1>
        <span>.</span>MOWEE
      </h1>
      <p>Imprint</p>
      <div>
        <a target="_blank" href="https://www.instagram.com/_moweedatabse/">
          <FontAwesomeIcon className="insta" icon={faInstagram} />
        </a>
        <a target="_blank" href="#">
          <FontAwesomeIcon className="fbook" icon={faFacebookF} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
