import { Component } from "react";

import './words-list-item.css';

import imageArrowUp from '../../assets/images/up-arrow.png';
import imageTrash from '../../assets/images/trash.png';
import imageFavorite from '../../assets/images/star.png';

class WordsListItem extends Component {


  render () {
    return (
      <div className="words-list__item">
        <div className="words-list__item-words">
          <span className="words-list__item-word">Hello</span>
          <span className="words-list__item-dash">-</span>
          <span className="words-list__item-translation">Привіт</span>
        </div>
        <div className="words-list__item-levels">
          <button className="words-list__item-btn words-btn__level-up">
            <img className="arrows-img" src={imageArrowUp} alt="level-up" />
          </button>
          <span className="words-list__item-level">
            Medium
          </span>
          <button className="words-list__item-btn words-btn__level-low">
            <img className="arrows-img" src={imageArrowUp} alt="level-low" />
          </button>
        </div>
        <div className="words-list__item-btns">
          <button className="words-list__item-btn">
            <img src={imageFavorite} alt="" />
          </button>
          <button className="words-list__item-btn">
            <img src={imageTrash} alt="" />
          </button>
        </div>
      </div>
    )
  }
}

export default WordsListItem;