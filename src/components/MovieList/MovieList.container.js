import { connect } from "react-redux";
import { fetchMovies } from "";
import MovieList from "./MovieList";

const mapStateToProps = state => ({
  data: state.movies.data,
  fetching: state.movies.fetching,
  fulfilled: state.movies.fulfilled,
  rejected: state.movies.rejected
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => {
    dispatch(fetchMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
