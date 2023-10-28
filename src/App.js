import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer>
          Coded by Victoria Stevenson and open sourced{" "}
          <a
            href="https://github.com/victoria-stevenson/react-dictionary"
            alt="Github Link"
          >
            on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
