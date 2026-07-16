import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddMovieForm = (props) => {
  const { handleClose,setMovies } = props;

  const [formData, setFormData] = useState({
    name: "",
    poster: "",
    rating: "",
    genre: "",
  });

  const handleChange = (event) => {
    console.log("trigger");
    console.log(event.target.value);

    const { name, value } = event.target;

    setFormData((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  console.log(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("trigger");

    const response = await axios.post(
      "https://6a543ea98547b9f7111c0a2d.mockapi.io/movies",
      formData,
    );
    console.log(response)

    if (response.status === 201) {
      console.log("movie added successfully");
      toast("Movie has been added successfully");
      setMovies((previousMovie)=>[...previousMovie,response.data])
      handleClose();
      setFormData({
        name: "",
        poster: "",
        rating: "",
        genre: "",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
      {/* <!-- overlay --> */}
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
      ></div>

      {/* <!-- Modal --> */}
      <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
        <div className="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
          >
            <svg
              xlinkTitle="Close"
              className="h-4 w-4 hover:rotate-180 transition-all ease-in-out duration-500 cursor-pointer text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>

          <div className="space-y-2">
            <div className="grid grid-cols-1 place-items-center px-4 py-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="Full Name"
                    className="mb-2 text-gray-400 text-lg"
                  >
                    Movie Name
                    <span className="text-red-600 inline-block p-1 text-sm">
                      *
                    </span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="border p-3 shadow-md  border-gray-700 placeholder:text-base focus:outline-none ease-in-out duration-300 rounded-lg w-full"
                    type="text"
                    placeholder="enter movie name..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 text-gray-400 text-lg">
                    Poster
                    <span className="text-red-600 inline-block p-1 text-sm">
                      *
                    </span>
                  </label>
                  <input
                    id="poster"
                    className="border p-3  border-gray-700 shadow-md placeholder:text-base focus:outline-none ease-in-out duration-300 rounded-lg w-full"
                    type="text"
                    placeholder="enter movie poster url..."
                    name="poster"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 text-gray-400 text-lg"
                  >
                    Genre
                    <span className="text-red-600 inline-block p-1 text-sm">
                      *
                    </span>
                  </label>
                  <input
                    id="subject"
                    className="border p-3  border-gray-700 shadow-md placeholder:text-base focus:outline-none ease-in-out duration-300 rounded-lg w-full"
                    type="text"
                    name="genre"
                    onChange={handleChange}
                    placeholder="enter movie genre"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Message"
                    className="mb-2 text-gray-400 text-lg"
                  >
                    Rating
                    <span className="text-red-600 st inline-block p-1 text-sm">
                      *
                    </span>
                  </label>
                  <input
                    id="subject"
                    className="border p-3  border-gray-700 shadow-md placeholder:text-base focus:outline-none ease-in-out duration-300 rounded-lg w-full"
                    type="text"
                    name="rating"
                    onChange={handleChange}
                    placeholder="enter movie rating."
                    required
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="border-b border-gray-700 px-2"
                ></div>
                <div className="px-6 py-2">
                  <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-[#4d1b80] hover:bg-[#7127BA] focus:bg-[#11071F] focus:ring-offset-[#11071F]"
                    >
                      <span className="flex items-center gap-1">
                        <span className="">Send</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
