import axios from "axios";
import { createContext, useEffect, useState } from "react";

// step 1 : create context
export const MovieContext = createContext();

// step 2 : provider => data throughout the application globally share garxa
export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(
      "http://localhost:5000/movies",
      // "https://6a543ea98547b9f7111c0a2d.mockapi.io/movies",
    );
   
    if (response.status === 200) {
      setMovies(response.data.data);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
