import WordsListItem from "../words-list-item/words-list-item";

import './words-list.css';

const WordsList = ({data, changeWordLevel}) => {
  const elements = data.map(item => {
    return (
      <WordsListItem
        key={item.id}
        id={item.id}
        word={item.word}
        translation={item.translation}
        level={item.level}
        favorite={item.favorite}
        changeWordLevel={changeWordLevel}
      />
    )
  })

  return(
    <ul className="words-list">
      {elements}
    </ul>
  )
}


export default WordsList;