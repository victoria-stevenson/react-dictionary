import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
  }

  function searchWord(event) {
    event.preventDefault();
    let apiKey = "cd1da53fbt4d9c2776oe462faaba011d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
