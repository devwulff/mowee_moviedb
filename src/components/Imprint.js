import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa-brands fa - html5} from "@fortawesome/free-brands-svg-icons";
import NavigationDetails from "./NavigationDetails";
import Footer from "./Footer";

const Imprint = () => {
  return (
    <div className="ImprintContainer">
      <NavigationDetails />
      <div className="Imprint">
        <h1 className="ImprintHeadline">Imprint</h1>
        <div>
          <h2 className="teamHeadline">Team:</h2>
          <div className="Team">
            <div>
              <p>Alex</p>
              <p>Design,CSS</p>
            </div>
            <div>
              <p>Emre</p>
              <p>Marketing</p>
            </div>
            <div>
              <p>Michaela</p>
              <p>Organisation</p>
            </div>
            <div>
              <p>Pascal</p>
              <p>Technical Lead, React JS</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="teamHeadline">Technologien:</h2>
          <div>
            <FontAwesomeIcon icon={`fa-brands fa-html5`} />
            <FontAwesomeIcon icon={`fa-brands fa-css3`} />
            <FontAwesomeIcon icon="fa-brands fa-react" />
            <FontAwesomeIcon icon="fa-brands fa-figma" />
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </div>
        </div>
        <div>
          <p>
            Diese Webseite wurde erstellt als Frontend-Abschlussprojekt im
            Bootcamp "Fullstack Webdevelopment" von SuperCode GmbH & Co.KG,
            Düsseldorf
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Imprint;
