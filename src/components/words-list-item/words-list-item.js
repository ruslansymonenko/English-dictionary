import { Component } from "react";

import './words-list-item.css';

import imageArrowUp from '../../assets/images/up-arrow.png';
import imageTrash from '../../assets/images/trash.png';
import imageFavorite from '../../assets/images/star.png';


class WordsListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      levelOfKnowledge: 'Low'
    }

  }

  componentDidMount() {
    this.checkLevel(this.props.level);
  }

  checkLevel = (levelInfo) => {
    switch (levelInfo) {
      case 1:
        this.setState((state) => {
          return {levelOfKnowledge: 'Low'}
        })
        break
      case 2:
        this.setState((state) => {
          return {levelOfKnowledge: 'Medium'}
        })
        break
      case 3:
        this.setState((state) => {
          return {levelOfKnowledge: 'High'}
        })
        break
      default:
        this.setState((state) => {
          return {levelOfKnowledge: 'Low'}
        })
    }
  }

  render() {
    const {word, translation, favorite} = this.props;

    return (
      <li className="words-list__item">
        <div className="words-list__item-words">
          <span className="words-list__item-word">{word}</span>
          <span className="words-list__item-dash">-</span>
          <span className="words-list__item-translation">{translation}</span>
        </div>
        <div className="words-list__item-levels">
          <button className="words-list__item-btn words-btn__level-up">
            <img className="arrows-img" src={imageArrowUp} alt="level-up" />
          </button>
          <span className="words-list__item-level">
            {this.state.levelOfKnowledge}
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
      </li>
    )
  }
}

export default WordsListItem;