import React from 'react';
import { useGlobalContext } from '../context';

const Form = () => {
  const { search, setSearch } = useGlobalContext();

  return (
    <form className="form-container" onSubmit={(e) => e.preventDefault()}>
      <h2 className="title">Search movie</h2>
      <input
        className="movie-input"
        type="text"
        placeholder="Enter movie here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Form;
