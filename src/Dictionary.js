import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function searchWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(loaded);
    searchWord();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    searchWord();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            className="text-field"
            type="search"
            placeholder="Enter search term"
            onChange={updateWord}
          />
          <input className="search-button" type="submit" value="Search" />
        </form>
        <div className="hint">
          <strong>suggested keywords:</strong> sunset, coffee, walking, blue,
          etc.
        </div>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
