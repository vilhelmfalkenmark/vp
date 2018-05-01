import React from "react";
import ContentList from "../components/ContentList";
import s from "./Root.css";

export const Root = () => (
  <div className={s.container}>
    <ContentList />
  </div>
);

export default Root;
