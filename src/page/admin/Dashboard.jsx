import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const Dashboard = () => {
  const { movies } = useContext(MovieContext);
  // console.log(movies);
  const totalMovies = movies.length;
  // console.log(totalMovies);

  // movies.reduce(fn,initialValue)
  const groupedMoviesByGenre = movies.reduce((acc, currValue) => {
    let genre = currValue.genre;
    // console.log(genre);
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(currValue);
    return acc;
  }, {});

  // console.log(groupedMoviesByGenre);

  // {
  //   'action' : [dhurandar],
  //   'sci-fi' : [avatar]
  // }

  return (
    <div className="bg-green-50 dark:bg-gray-800 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            The Ultimate Data Analytics Platform
          </h2>
        </div>
      </div>
      <div className="mt-10 bg-white dark:bg-gray-700 pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-green-50 dark:bg-gray-800"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                    Total Movies
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                    <span>{totalMovies}</span>+
                  </dd>
                </div>

                {Object.entries(groupedMoviesByGenre).map(([genre,movie]) => {
                  // console.log(genre)
                  // console.log(movie)
                  return (
                    <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                        {genre}
                      </dt>
                      <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                        <span>{movie.length}</span>+
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
