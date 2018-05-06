import { connect } from "react-redux";
import { fetchContent } from "../../store/content/actions";
import ContentList from "./ContentList";

const mapStateToProps = state => ({
  data: state.content.data,
  fetching: state.content.fetching,
  fulfilled: state.content.fulfilled,
  rejected: state.content.rejected,
  message: state.content.message
});

const mapDispatchToProps = dispatch => ({
  fetchContent: () => {
    dispatch(fetchContent());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
