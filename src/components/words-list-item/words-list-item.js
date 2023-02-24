import { Component } from "react";

import './words-list-item.css';

import imageArrowUp from '../../assets/images/up-arrow.png';
import imageTrash from '../../assets/images/trash.png';
import imageFavorite from '../../assets/images/star.png';


class WordsListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      levelOfKnowledge: this.props.level,
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

  
  getCurrentLevelNumber = (level) => {
    switch (level) {
      case 'Low':
        return 1
      case 'Medium':
        return 2
      case 'High':
        return 3
      default:
        return 1
    }
  }

  changeWordLevel = (e) => {
    const currentElementId = e.target.closest('.words-list__item').getAttribute('data-id');
    const currentBtn = e.target.closest('.words-list__item-btn');
    // const currentLevelWord = this.state.levelOfKnowledge;

    let currentLevelNumber = this.getCurrentLevelNumber(this.state.levelOfKnowledge);

    this.props.changeWordLevel(parseInt(currentElementId), currentLevelNumber, currentBtn)
  }

  changeLevelColor = () => {
    let listItemClasssList;

    switch (this.state.levelOfKnowledge) {
      case 'Low':
        listItemClasssList = '_low-level';
        break
      case 'Medium':
        listItemClasssList = '_medium-level';
        break
      case 'High':
        listItemClasssList = '_high-level';
        break
      default:
        listItemClasssList = '';
    }

    return listItemClasssList
  }

  render() {
    const {id, word, translation, favorite} = this.props;

    return (
      <li 
        className={`words-list__item ${this.changeLevelColor()}`}
        data-id={id}
      >
        <div className="words-list__item-words">
          <span className="words-list__item-word">{word}</span>
          <span className="words-list__item-dash">-</span>
          <span className="words-list__item-translation">{translation}</span>
        </div>
        <div className="words-list__item-levels">
          <button 
            className="words-list__item-btn words-btn__level-up"
            onClick={this.changeWordLevel}
            >
            <img className="arrows-img" src={imageArrowUp} alt="level-up" />
          </button>
          <span className="words-list__item-level">
            {this.state.levelOfKnowledge}
          </span>
          <button 
            className="words-list__item-btn words-btn__level-low"
            onClick={this.changeWordLevel}>
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