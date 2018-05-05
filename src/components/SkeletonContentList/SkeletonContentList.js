import React from "react";
import s from "./SkeletonContentList.css";

const SkeletonContentList = ({ amount }) => (
  <div className={s.container}>
    <ul className={s.list}>
      <li className={`${s.item} ${s.r1c1}`} />
      <li className={`${s.item} ${s.r1c2}`} />
      <li className={`${s.item} ${s.r1c3}`} />
      <li className={`${s.item} ${s.r2c1}`} />
      <li className={`${s.item} ${s.r2c2}`} />
      <li className={`${s.item} ${s.r2c3}`} />
      <li className={`${s.item} ${s.r3c1}`} />
      <li className={`${s.item} ${s.r3c2}`} />
      <li className={`${s.item} ${s.r3c3}`} />
    </ul>
  </div>
);

export default SkeletonContentList;
