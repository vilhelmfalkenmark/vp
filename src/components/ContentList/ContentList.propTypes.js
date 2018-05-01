import PropTypes from "prop-types";

const ContentTypes = {
  data: PropTypes.shape({
    contentTitle: PropTypes.string,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string
      })
    )
  }),
  fetching: PropTypes.bool,
  fulfilled: PropTypes.bool,
  rejected: PropTypes.bool,
  fetchContent: PropTypes.func
};

export default ContentTypes;
