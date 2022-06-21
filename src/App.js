import { Link } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import MovieList from "./components/MovieList";

function App() {
  const [change, setChange] = useState("");
  const handleOnChange = (elt) => {
    setChange(elt.target.value);
  };

  return (
    <div className="App">
      <Navigation onChange={handleOnChange} />
      <MovieList change={change} />
      {/* <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/movielist" element={<MovieList />} /> */}
      {/* <Route path="/details/:id" element={<MovieList />} /> */}
      {/* </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
