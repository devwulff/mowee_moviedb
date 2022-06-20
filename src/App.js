import "./App.css";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
