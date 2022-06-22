import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./components/Details";
import Filter from "./components/Filter";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="filter" element={<Filter />} />
      </Routes>
    </div >
  );
}

export default App;
