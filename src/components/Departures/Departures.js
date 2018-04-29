import React from "react";
import s from "./Departures.css";
import DeparturesTypes from "./Departures.propTypes";

const Departures = ({ data, fetching, rejected, fulfilled, test }) => {
  return (
    <div className={s.container}>
      <h2>Avgångar</h2>
    </div>
  );
};

DeparturesTypes.prototypes = DeparturesTypes;

export default Departures;
