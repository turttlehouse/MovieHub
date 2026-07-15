import { useEffect, useState } from "react";
import MovieCard from "../components/movies/MovieCard";
import Navbar from "../components/global/Navbar";
import MovieHeroSection from "../components/movies/MovieHeroSection";
import Footer from "../components/global/Footer";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    // fetch data from mock api server
    const response = await fetch(
      "https://6a543ea98547b9f7111c0a2d.mockapi.io/movies",
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    // ya vitra- first page load

    fetchMovies();
  }, []);

  return (
    <main>
      <Navbar />
      <MovieHeroSection />
      <div className="grid grid-cols-4 gap-4 p-4">
        {movies?.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
