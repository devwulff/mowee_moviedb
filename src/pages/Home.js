import { useState } from "react";
import MovieList from "./../components/MovieList";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";
// import Filter from "./../components/Filter";

const Home = () => {
  const [change, setChange] = useState("");
  const handleOnChange = (elt) => {
    setChange(elt.target.value);
  };

  return (
    <div>
      <Navigation onChange={handleOnChange} />
      {/* <Filter /> */}
      <MovieList change={change} />
      <Footer />
    </div>
  );
};

export default Home;
