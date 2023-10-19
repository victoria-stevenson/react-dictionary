import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input
          type="search"
          placeholder="Enter search term"
          onChange={updateWord}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
