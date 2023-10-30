import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <audio controls src={props.phonetics.audio}>
          <a href={props.phonetics.audio}>Listen</a>
        </audio>
        <br />
        <div className="phonetics-spelling">{props.phonetics.text}</div>
      </div>
    );
  } else {
    return (
      <div className="Phonetics">
        <div className="phonetics-spelling">{props.phonetics.text}</div>
      </div>
    );
  }
}
