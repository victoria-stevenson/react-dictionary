import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <div className="example">{definition.example}</div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
