import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
function Home() {
  const movies = [
    {
      id: 1,
      title: "John Wick",
      release_date: "2020",
      url: "../assets/react.svg",
    },
    {
      id: 2,
      title: "The Terminator",
      release_date: "1999",
      url: "../assets/react.svg",
    },
    {
      id: 3,
      title: "The Matrix (Andrew Tate Edition)",
      release_date: "2022",
      url: "../assets/react.svg",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies... "
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {/* // e.title.toLocaleLowerCase().startsWith(searchQuery) && */}
        {movies.map((e) => (
          <MovieCard movie={e} key={e.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
