import { connect } from "react-redux";
import { fetchContent, setMessage } from "../../store/content/actions";
import ContentList from "./ContentList";

const mapStateToProps = state => ({
  data: state.content.data,
  message: state.content.message,
  fetching: state.content.fetching,
  fulfilled: state.content.fulfilled,
  rejected: state.content.rejected
});

const mapDispatchToProps = dispatch => ({
  fetchContent: () => {
    dispatch(fetchContent());
  },
  setMessage: message => {
    dispatch(setMessage(message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
