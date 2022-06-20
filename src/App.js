import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MovieList />
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/gallery/:id" element={<Details />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
