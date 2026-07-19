import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const Dashboard = () => {
  const { movies } = useContext(MovieContext);
  const totalMovies = movies.length;
  console.log(totalMovies);

  // reduce() => method js => collection of values=> single value
  // group movies by genre

  // acc = {} = emptyObject
  // currValue
  //   {
  //     name: 'Jaari',
  //     poster:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJxsAltHtgJleSohbhSaeR7mlVYUkKjF71a6Ask0t3Q&s=10',
  //     rating: '3',
  //     genre: 'Love',
  //     id: '2'
  //   },

  
  // const groupedMoviesByGenre = movies?.reduce((acc, currValue) => {
  //   const genre = currValue?.genre;
  //   if (!acc[genre]) {
  //     acc[genre] = [];
  //   }
  //   acc[genre].push(currValue);
  // }, {});

  // console.log(groupedMoviesByGenre);

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
                <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                    Analytic Tools and Machine Learning Models
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                    <span>100</span>+
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                    Real-time Data Streams and Dashboards
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                    <span>10</span>+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
