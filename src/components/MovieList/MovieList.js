import React, { Component } from "react";
import s from "./MovieList.css";
import MovieListTypes from "./MovieList.propTypes";

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentWillMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <div className={s.container}>
        <h2>Filmer</h2>
      </div>
    );
  }
}

// = ({ data, fetching, rejected, fulfilled, test }) => {
//   return (
//     <div className={s.container}>
//       <h2>Filmer</h2>
//     </div>
//   );
// };

MovieList.prototypes = MovieListTypes;

export default MovieList;
