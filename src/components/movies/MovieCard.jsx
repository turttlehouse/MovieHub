import StarRating from "./StarRating";

const MovieCard = (props) => {
  const { movie } = props;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={movie.poster}
        alt="Movie Poster"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{movie.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{movie.genre}</p>
        <div className="flex justify-between items-center">
          {/* <span className="font-bold">{movie.rating}</span> */}
          <StarRating rating={movie.rating}/>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700">
            Watch Now.
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

