import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input
          className="text-field"
          type="search"
          placeholder="Enter search term"
          onChange={updateWord}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
      <div className="hint">
        <strong>suggested keywords:</strong> sunset, coffee, walking, blue, etc.
      </div>

      <Results results={results} />
    </div>
  );
}
