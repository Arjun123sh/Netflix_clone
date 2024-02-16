import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div>
      {
        movies.nowPlayingMovies && (
          <div className=' bg-black'>
            <div className=' pl-12 -mt-52 relative z-20'>
            <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MoviesList title={"Trending"} movies={movies.trendingMovies} />
            <MoviesList title={"Popular"} movies={movies.popularMovies} />
            <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default SecondaryContainer
