import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AddMovieForm from "./AddMovieForm";
import { toast } from "react-toastify";
import { MovieContext } from "../../context/MovieContext";

const MovieList = () => {
  const { movies,setMovies } = useContext(MovieContext);
  console.log(movies);
  const [openForm, setOpenForm] = useState(false);
  const handleOpen = () => {
    setSelectedMovie(null);
    setOpenForm(true);
  };
  const handleClose = () => {
    setOpenForm(false);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(
      "http://localhost:5000/movies/" + id,
    );
    if (response.status === 200) {
      setMovies((previousValue) =>
        previousValue.filter((prev) => prev._id !== id),
      );
      toast("Movie has been deleted successfully");
    }
  };
  
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleEdit = (movie) => {
    setSelectedMovie(movie);
    setOpenForm(true);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-blue-600 text-white px-2 font-semibold rounded"
      >
        Add Movie
      </button>

      {/* form ui */}
      {openForm === true ? (
        <AddMovieForm
          selectedMovie={selectedMovie}
          handleClose={handleClose}
          setMovies={setMovies}
        />
      ) : (
        <span></span>
      )}

      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Movie Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Rating
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Genre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {movies.map((movie) => {
            return (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={movie.poster}
                        alt=""
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{movie.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {movie.rating}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {movie.genre}
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <button
                    // onClick={handleEdit}
                    onClick={() => handleEdit(movie)}
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(movie._id)}
                    className="ml-2 text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}

          {/* <!-- More rows... --> */}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
