import React from "react";
import MovieList from "../components/MovieList";
import s from "./Root.css";

export const Root = () => (
  <div className={s.container}>
    <MovieList />
  </div>
);

export default Root;
