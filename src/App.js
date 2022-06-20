import './App.css';
import MovieList from './components/MovieList';
// import Details from './components/Details';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MovieList />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/movielist" element={<MovieList />} />
        <Route path="/detail/:name" element={<Details />} /> */}
      </Routes>
    </div>
  );
}

export default App;
