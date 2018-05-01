import React from "react";
import Header from "../components/Header";
import ContentList from "../components/ContentList";
// import Footer from "../components/ContentList";
import s from "./Root.css";

export const Root = () => (
  <div className={s.container}>
    <Header />
    <ContentList />
  </div>
);

export default Root;
