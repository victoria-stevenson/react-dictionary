import React from "react";
import Dictionary from "./Dictionary";

export default function Results(props) {
  return (
    <div className="Results">
      <h2>Word</h2>
      <h5>Meaning</h5>
      <p>{props.data}</p>
    </div>
  );
}
