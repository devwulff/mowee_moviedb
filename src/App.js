import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./components/Details";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import PopularityAsc from "./components/PopularityAsc";
import PopularityDesc from "./components/PopularityDesc";
import ReleaseAsc from "./components/ReleaseAsc";
import ReleaseDesc from "./components/ReleaseDesc";
import VoteAverageAsc from "./components/VoteAverageAsc";
import VoteAverageDesc from "./components/VoteAverageDesc";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="popular" element={<Popular />} />
        <Route path="popularityasc" element={<PopularityAsc />} />
        <Route path="popularitydesc" element={<PopularityDesc />} />
        <Route path="releaseasc" element={<ReleaseAsc />} />
        <Route path="releasedesc" element={<ReleaseDesc />} />
        <Route path="voteaverageasc" element={<VoteAverageAsc />} />
        <Route path="voteaveragedesc" element={<VoteAverageDesc />} />
      </Routes>
    </div>
  );
}

export default App;
