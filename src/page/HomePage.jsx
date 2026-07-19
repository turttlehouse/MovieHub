import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/movies/MovieCard";
import Navbar from "../components/global/Navbar";
import MovieHeroSection from "../components/movies/MovieHeroSection";
import Footer from "../components/global/Footer";
import { MovieContext } from "../context/MovieContext";

const HomePage = () => {
  const { movies } = useContext(MovieContext);
  const [keyword, setKeyword] = useState("");
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <main>
      <Navbar />
      <MovieHeroSection setKeyword={setKeyword} />
      <div className="grid grid-cols-4 gap-4 p-4">
        {filteredMovies?.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
