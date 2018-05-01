import React, { Component } from "react";
import s from "./ContentList.css";
import ContentListTypes from "./ContentList.propTypes";

class ContentList extends Component {
  componentWillMount() {
    // this.props.fetchContent();
    this.props.setMessage("Hejsan från klient component will mount");
    this.props.fetchContent();
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

ContentList.prototypes = ContentListTypes;

export default ContentList;
