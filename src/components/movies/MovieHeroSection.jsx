import { Search } from "lucide-react";

const MovieHeroSection = () => {
  return (
    <section className="bg-linear-to-r from-blue-800 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Trade Movies, Save Money
        </h1>
        <p className="text-xl mb-8">
          Buy, sell, or trade DVDs, Blu-rays, and collectibles with movie lovers
          worldwide.
        </p>
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full border px-4 py-3 rounded-full text-gray-800 focus:outline-none bg-white"
          />
          <button className="absolute right-2 top-2 bg-yellow-500 text-black px-4 py-1 rounded-full">
            <Search />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieHeroSection;
