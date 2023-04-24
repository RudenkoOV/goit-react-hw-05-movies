import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastElement, CastImg, CastList } from './Cast.styled';

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
const api_key = 'a84d97df77921338135d279eaee16d48';
const url = `https://api.themoviedb.org/3/movie/`;

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${url}${movieId}/credits?api_key=${api_key}`);
      setCast(result.data.cast);
    };
    fetchData();
  }, [movieId]);

  if (!cast) {
    return <b>Loading...</b>;
  }
  if (cast.length === 0) {
    return <p>We don't have any information.</p>
  }
  return (
    <CastList>
      {cast.map(el => (
        <CastElement key={el.cast_id}>
          <CastImg
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w200${el.profile_path}`
                : 'https://via.placeholder.com/100x150.png?text=No+Image'
            }
            alt={el.name}
          />
          <p>{el.name}</p>
          <p>Character: {el.character}</p>
        </CastElement>
      ))}
    </CastList>
  );
};

export default Cast;
