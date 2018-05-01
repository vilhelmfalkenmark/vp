import React from "react";
import s from "./ContentItem.css";

const ContentItem = ({ item }) => (
  <li className={s.container}>
    <figure
      className={s.backgroundImage}
      style={{
        backgroundImage: `url(${item.bgImageUrl})`
      }}
    />
  </li>
);

export default ContentItem;
