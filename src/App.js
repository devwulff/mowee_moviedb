import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import MovieList from "./components/MovieList";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MovieList />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/movielist" element={<MovieList />} /> */}
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
