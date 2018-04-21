import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar.js";

// const API_KEY = "AIzaSyAQYiNuD6trK-giyef9h6J44-uUymn-6T0";

// Component - something that produces HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};


//  Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));