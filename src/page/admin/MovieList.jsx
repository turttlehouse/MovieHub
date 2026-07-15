import axios from "axios";
import React, { useEffect, useState } from "react";
import AddMovieForm from "./AddMovieForm";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  

  //   server bata data leune
  const fetchMovies = async () => {
    const response = await axios.get(
      "https://6a543ea98547b9f7111c0a2d.mockapi.io/movies",
    );
    setMovies(response.data);
  };

  useEffect(() => {
    // yo logic user first choti page ma auda run hunxa

    fetchMovies();
  }, []);

  const handleOpen = () => {
    // console.log('add movie btn clicked')
    setOpenForm(true);
  };
  

  

  // console.log(formData)
  // async,await => asynchronous operation ?
  // yedi kunai operation execute huna / complete huna time lagxa vane
  // for eg server lai data dinu , server bata data fetch
  // file bata data read

  // fetch()  vs axios
  // 2xxx => success
  // 5xxx => failure server error

  

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
        <AddMovieForm/>
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
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                    Delete
                  </a>
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
