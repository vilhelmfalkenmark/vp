import { connect } from "react-redux";
import { fetchMovies, setMessage } from "../../store/movies/actions";
import MovieList from "./MovieList";

const mapStateToProps = state => ({
  data: state.movies.data,
  message: state.movies.message,
  fetching: state.movies.fetching,
  fulfilled: state.movies.fulfilled,
  rejected: state.movies.rejected
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => {
    dispatch(fetchMovies());
  },
  setMessage: message => {
    dispatch(setMessage(message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
