import React, { Component } from "react";
import s from "./MovieList.css";
import MovieListTypes from "./MovieList.propTypes";

class MovieList extends Component {
  componentWillMount() {
    // this.props.fetchMovies();
    this.props.setMessage("Hejsan från klient component will mount");
  }
  render() {
    const { data, fetching, rejected, fulfilled, message } = this.props;

    return (
      <div className={s.container}>
        <h2>{message}</h2>
      </div>
    );
  }
}

MovieList.prototypes = MovieListTypes;

export default MovieList;
