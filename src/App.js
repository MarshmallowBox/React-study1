//App.js
import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Props from "./components/Props";
import Counter from "./components/Counter";
import UseState from "./components/UseState";
//import DataUse from "./components/DataUse";
import Components from "./components/Components";
import ComponentsClass from "./components/ComponentsClass";
import ComponentsFunction from "./components/ComponentsFunction";
import Iteration from "./components/Iteration";
import ValidationSample from "./dom/ValidationSample";
import Ref from "./dom/Ref";
import ScrollBox from "./dom/ScrollBox";
import LifeCycle from "./lifecycle/LifeCycle";
import ErrorBoundary from "./ErrorBoundary";
import Info from "./hooks/Info";
import ReducerCounter from "./hooks/ReducerCounter";
import ReducerCounter2 from "./hooks/ReducerCounter2";
import Average from "./hooks/Average";
import SassComponent from "./style/SassComponent";
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
      <hr />
      <Props name="React" favoriteNumber={3}>
        childrens
      </Props>
      <br />
      <hr />
      <Counter />
      <br />
      <hr />
      <UseState />
      <br />
      <hr />
      <Components />
      <ComponentsClass />
      <ComponentsFunction />
      <br />
      <hr />
      <ValidationSample />
      <br />
      <hr />
      <Ref />
      <br />
      <hr />
      <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      <button onClick={() => this.scrollBox.scrollToBottom()}>밑으로</button>
      <br />
      <hr />
      <Iteration />
      <br />
      <hr />
      <ErrorBoundary>
        <LifeCycle />
      </ErrorBoundary>
      <br />
      <hr />
      <Info />
      <br />
      <hr />
      <ReducerCounter />
      <ReducerCounter2 />
      <br />
      <hr />

      <Average />
      <SassComponent />
    </>
  );
}
export default App;
