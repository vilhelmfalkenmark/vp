import React, { Component } from "react";

import SkeletonContentList from "../SkeletonContentList";
import ContentItem from "../ContentItem";

import s from "./ContentList.css";
import ContentListTypes from "./ContentList.propTypes";

class ContentList extends Component {
  componentWillMount() {
    this.props.fetchContent();
  }
  render() {
    const { data, fetching, rejected, fulfilled, message } = this.props;

    return (
      <div className={s.container}>
        <h2>{message}</h2>
        {!fetching && fulfilled ? (
          <ul className={s.list}>
            {data.content.map((item, i) => <ContentItem key={i} item={item} />)}
          </ul>
        ) : (
          <SkeletonContentList />
        )}
      </div>
    );
  }
}

ContentList.propTypes = ContentListTypes;

export default ContentList;
