import React from "react";
import MovieList from "../components/MovieList";
import s from "./Root.css";

export const Root = () => (
  <div className={s.container}>
    <h4 className={s.test}>HEJ!</h4>
    <MovieList />
  </div>
);

export default Root;
