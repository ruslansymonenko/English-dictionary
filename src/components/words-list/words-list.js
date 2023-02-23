import { Component } from "react";
import WordsListItem from "../words-list-item/words-list-item";

import './words-list.css'

class WordsList extends Component {


  render() {
    return(
      <div className="words-list">
        <WordsListItem/>
      </div>
    )
  }
}

export default WordsList;