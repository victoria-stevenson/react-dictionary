import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <audio controls src={props.phonetics.audio}>
        <a href={props.phonetics.audio}>Listen</a>
      </audio>
      <br />
      {props.phonetics.text}
    </div>
  );
}
