import React, { Component } from "react";

import SkeletonContentList from "../SkeletonContentList";
import ContentItem from "../ContentItem";

import s from "./ContentList.css";
import ContentListTypes from "./ContentList.propTypes";

class ContentList extends Component {
  constructor() {
    super();
    this.markup = this.markup.bind(this);
  }

  componentWillMount() {
    this.props.fetchContent();
  }

  markup() {
    const { data, fetching, rejected, fulfilled } = this.props;
    if (fetching) {
      return <SkeletonContentList />;
    } else if (!fetching && fulfilled && !rejected) {
      return (
        <ul className={s.list}>
          {data.content.map((item, i) => <ContentItem key={i} item={item} />)}
        </ul>
      );
    }
    return <p>Något gick fel</p>;
  }

  render() {
    return <div className={s.container}>{this.markup()}</div>;
  }
}

ContentList.propTypes = ContentListTypes;

export default ContentList;
