import PropTypes from "prop-types";

const ContentTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fetching: PropTypes.bool,
  fulfilled: PropTypes.bool,
  rejected: PropTypes.bool,
  fetchContent: PropTypes.func
};

export default ContentTypes;
