import React from "react";
import s from "./ContentItem.css";

const ContentItem = ({ item }) => (
  <li className={s.container}>
    <img src={item.imageUrl} className={s.image} alt={item.title} />
  </li>
);

export default ContentItem;
