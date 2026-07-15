import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    poster: "",
    rating: "",
    genre: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);

    const { name, value } = event.target;

    setFormData((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "https://6a543ea98547b9f7111c0a2d.mockapi.io/movies",
      formData,
    );

    if (response.status === 201) {
      console.log("movie added successfully");
      toast("Movie has been added successfully");
    }

    setFormData({
      name: "",
      poster: "",
      rating: "",
      genre: "",
    });
  };

  return (
    <div className="bg-blue-200 min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
          Fill out our form
        </h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label for="name" className="block mb-2 font-bold text-gray-600">
                Movie Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="enter movie name.."
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div className="mb-5">
              <label
                for="twitter"
                className="block mb-2 font-bold text-gray-600"
              >
                Poster
              </label>
              <input
                type="text"
                id="twitter"
                name="poster"
                value={formData.poster}
                onChange={handleChange}
                placeholder="enter movie poster url..."
                className="border border-red-300 shadow p-3 w-full rounded mb-"
              />
            </div>
            <div className="mb-5">
              <label
                for="twitter"
                className="block mb-2 font-bold text-gray-600"
              >
                Rating
              </label>
              <input
                type="text"
                id="twitter"
                name="rating"
                onChange={handleChange}
                value={formData.rating}
                placeholder="enter movie rating."
                className="border border-red-300 shadow p-3 w-full rounded mb-"
              />
            </div>
            <div className="mb-5">
              <label
                for="twitter"
                className="block mb-2 font-bold text-gray-600"
              >
                Genre
              </label>
              <input
                type="text"
                id="twitter"
                name="genre"
                onChange={handleChange}
                value={formData.genre}
                placeholder="enter movie genre."
                className="border border-red-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
