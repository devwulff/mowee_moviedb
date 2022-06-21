import MovieList from './../components/MovieList';
// import Filter from './../components/Filter';
import Navigation from './../components/Navigation';

const Home = () => {
    return (<div>
        <h1>Moviedatabase</h1>
        <Navigation />
        {/* <Filter /> */}
        <MovieList />
    </div>);
}

export default Home;