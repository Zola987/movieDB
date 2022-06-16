import React, { createContext, useContext, useEffect, useState } from 'react';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${search}`);
  }, [search]);

  return (
    <AppContext.Provider
      value={{ search, setSearch, movies, setMovies, fetchMovies }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
