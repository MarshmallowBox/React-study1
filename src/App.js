//App.js
import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Props from "./components/Props";
import Counter from "./components/Counter"
import UseState from "./components/UseState"
import DataUse from "./components/DataUse"
import Components from "./components/Components"
import "./App.css";
function App() {
  const [movies, setMovies] = useState([]);
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} removeMovie={removeMovie} />;
      })
    : "추가된 영화가 없습니다.";

  useEffect(() => {
    console.log(...movies);
  }, [movies]);
  //JSX return
  return (
    <>
      <h1 className="head">Movie List</h1>
      <div className="App">
        <MovieForm addMovie={addMovie} />
        {renderMovies}
      </div>
      <br />
      <br />
      <hr />
      
      <Props name="React" favoriteNumber={3}>childrens</Props><br /><br />
      <hr />

      <Counter /><br /><br />
      <hr />

      <UseState /><br /><br />
      <hr />

      <Components /><br /><br />
      <hr />
      
      
    </>
  );
}
export default App;
