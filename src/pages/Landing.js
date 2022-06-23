// import Home from "./Home";
import intro from "../video/intro.mp4";
import ReactPlayer from "react-player";

const Landing = () => {
  window.setTimeout(function () {
    // Move to a new location or you can do something else
    window.location.href = "/home";
  }, 5700);

  return (
    <div className="landingpage">
      <ReactPlayer
        muted
        onReady={true}
        playing={true}
        url={intro}
        width={1280}
        height={720}
        controls={false}
        autoPlay={true}
      />
    </div>
  );
};

export default Landing;
