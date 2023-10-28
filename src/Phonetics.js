import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <audio controls src={props.phonetics.audio}>
        <a href={props.phonetics.audio}>Listen</a>
      </audio>
      <br />
      <div className="phonetics-spelling">{props.phonetics.text}</div>
    </div>
  );
}
