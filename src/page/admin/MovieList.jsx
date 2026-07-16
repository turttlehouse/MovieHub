import axios from "axios";
import React, { useEffect, useState } from "react";
import AddMovieForm from "./AddMovieForm";
import { toast } from "react-toastify";

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

  const handleClose = () => {
    setOpenForm(false);
  };

  console.log(movies)

  // [
  //   {
  //     name: 'Jaari',
  //     poster: 
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJxsAltHtgJleSohbhSaeR7mlVYUkKjF71a6Ask0t3Q&s=10',
  //     rating: '3',
  //     genre: 'Love',
  //     id: '2'
  //   },
  //   {
  //     name: 'Inception',
  //     poster: 
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vKxwTnWVEAuj_xXaj0h8kWUdUxM2cXJBm2XiLA-JNg&s=10',
  //     rating: '2',
  //     genre: 'Sci-fi',
  //     id: '3'
  //   },
  //   {
  //     name: 'Tricker Treat',
  //     poster: 
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_S8iexXCT1vlBIPi-82w377mYQTHnJxGeDJpqKbB2Q&s=10',
  //     rating: '1',
  //     genre: 'Horror',
  //     id: '4'
  //   }
  // ]

  const handleDelete = async (id) => {
    console.log(id);

    const response = await axios.delete(
      "https://6a543ea98547b9f7111c0a2d.mockapi.io/movies/" + id,
    );
    if (response.status === 200) {
      setMovies((previousValue) =>
        previousValue.filter((prev) => prev.id !== id),
      );
      toast("Movie has been deleted successfully");
    }
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
        <AddMovieForm handleClose={handleClose} setMovies={setMovies} />
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
                  <button
                    onClick={() => handleDelete(movie.id)}
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
