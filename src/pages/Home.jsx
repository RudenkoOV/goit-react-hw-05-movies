import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MovieItem,
  MovieList,
  TitleHome,
} from './Home.styled';
const api_key = 'cbd8bb6ab7443496075b168356471aed';
const url = `https://api.themoviedb.org/3/trending/movie/`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const searchPeriod = 'day';

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(`${url}${searchPeriod}?api_key=${api_key}`);
      const movieArr = result.data.results.map(
        ({ id, title, poster_path }) => ({
          id,
          title,
          poster_path,
        })
      );
      setMovies(movieArr);
    };
    fetchData();
  });
  if (!movies) {
    return <b>Loading...</b>;
  }
  return (
    <div>
      <TitleHome>Trending for {searchPeriod}</TitleHome>
      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </div>
  );
};

export default Home;
