import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Pictures from "./Pictures";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPictures(response.data.photos);
  }

  function searchWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch(function (error) {
        setError(true);
      });

    let pexelsApiKey =
      "5EG5uSfsgZVFZWVRbBaQtOOFwnAMoUoL5lYdUgmTuKoJstJmGr8Zpo58";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        {error ? (
          <h4 className="text-center">
            Oops! No results found, please reload the page and try again 📂
          </h4>
        ) : (
          <>
            <Results results={results} />
            <Pictures pictures={pictures} />
          </>
        )}
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
