import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Movies = () => {
  const { movies, setMovies } = useGlobalContext();

  return (
    <section className="movie-container">
      {movies.map((movie) => {
        const { imdbID, Poster, Title, Year } = movie;
        return (
          <Link className="movie" to={`movies/${imdbID}`} key={imdbID}>
            <article>
              <img src={Poster} alt={Title} />
              <div className="movie-info">
                <h4 className="title">
                  {Title} ({Year})
                </h4>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
