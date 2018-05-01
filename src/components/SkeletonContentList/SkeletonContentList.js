import React from "react";
import s from "./SkeletonContentList.css";

const SkeletonContentItem = () => <li className={s.item} />;

const SkeletonContentList = ({ amount }) => (
  <ul className={s.list}>
    <SkeletonContentItem />
    <SkeletonContentItem />
    <SkeletonContentItem />
    <SkeletonContentItem />
    <SkeletonContentItem />
  </ul>
);

export default SkeletonContentList;
