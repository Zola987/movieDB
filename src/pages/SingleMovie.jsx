import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const SingleMovie = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  const { Poster, Title, Plot, Year } = movie;
  return (
    <section className="single-container">
      <img src={Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>
          {Title} <h4>({Year})</h4>
        </h2>
        <p>{Plot}</p>
        <Link className="back-link" to="/">
          Back to Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
