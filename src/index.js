import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar.js";

const API_KEY = "AIzaSyAQYiNuD6trK-giyef9h6J44-uUymn-6T0";


// Component - something that produces HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    }

    YTSearch({key: API_KEY, term: "phish"}, (videos) =>{
      //destructuring (ES6) the response and saving it to videos
      this.setState({videos})
      //same as: ---key and value must have the same name
      // this.setState({videos: videos})

    })
        
    YTSearch({key: API_KEY, term: "phish"}, (data) =>{
      this.setState({videos: data})
    })

  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

//  Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
