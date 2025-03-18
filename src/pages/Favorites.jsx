import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((e) => (
            <MovieCard movie={e} key={e.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
