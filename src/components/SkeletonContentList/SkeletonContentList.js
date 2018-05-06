import React from "react";
import s from "./SkeletonContentList.css";

const SkeletonContentList = ({ amount }) => (
  <div className={s.container}>
    <div className={s.pulse}>
      <ul className={s.list}>
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
        <li className={s.item} />
      </ul>
    </div>
  </div>
);

export default SkeletonContentList;
