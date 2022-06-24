import { useState } from "react";
import MovieList from "./../components/MovieList";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";
import Sidebar from "../components/Sidebar";
<<<<<<< HEAD
import intro2 from "../video/intro.mp4";
import ReactPlayer from "react-player";
=======
>>>>>>> alex

const Home = () => {
  const [intro, setIntro] = useState(true);

  window.setTimeout(function () {
    setIntro(false);
  }, 5700);

  const [change, setChange] = useState("");
  const handleOnChange = (elt) => {
    setChange(elt.target.value);
  };

  return (
<<<<<<< HEAD
    <div>
      {intro && (
        <div className="landingpage">
          <ReactPlayer
            muted
            playing={true}
            url={intro2}
            width={1280}
            height={720}
            controls={false}
            autoPlay={true}
          />
        </div>
      )}
      {!intro && (
        <div id="outer-container">
          <div id="page-wrap">
            <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-cobtainer"}
            />
            <Navigation onChange={handleOnChange} />
            <MovieList change={change} />
            <Footer />
          </div>
        </div>
      )}
=======
    <div id="outer-container">
      <div id="page-wrap">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <Navigation onChange={handleOnChange} />
        <MovieList change={change} />
        <Footer />
      </div>
>>>>>>> alex
    </div>
  );
};

export default Home;
