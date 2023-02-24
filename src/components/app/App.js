import {Component} from "react";

import InputsField from "../inputs-field/inputs-fiels";
import WordsList from "../words-list/words-list";
import Footer from "../footer/footer";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {id: 111, word: 'Hello', translation: 'Привіт', level: 2, favorite: false},
        {id: 222, word: 'Shop', translation: 'Магазин', level: 3, favorite: false},
        {id: 333, word: 'Book', translation: 'Книга', level: 1, favorite: false},
      ]
    }
  }

  changeWordLevel = (id, currentLevel, btn) => {
    const index = this.state.data.findIndex((obj) => obj.id === id);
    const objForUpdate = this.state.data[index];

    function changeArray (arr, id, changedLevel, originalObj) {
      const updatedObject = {...originalObj, level: changedLevel}

      const updatedArray = arr.map((obj) => {
        if (obj.id === id) {
          return { ...obj, ...updatedObject };
        }
        return obj;
      });
      return updatedArray;
    }

    if (btn.classList.contains('words-btn__level-up')) {
      if(currentLevel <= 3) {
        let levelUp = currentLevel + 1;
        let updatedArray = changeArray(this.state.data, id, levelUp, objForUpdate);
        this.setState(({data}) => {
          return {
            data: updatedArray
          }
        });
      }
    } else if (btn.classList.contains('words-btn__level-low')) {
      if(currentLevel >= 1) {
        let levelLow = currentLevel - 1;
        let updatedArray = changeArray(this.state.data, id, levelLow, objForUpdate);
        this.setState(({data}) => {
          return {
            data: updatedArray
          }
        })
      }
    }
  }

  render() {
    const {data} = this.state;

    return(
      <div className="App">
        <div className="app-fields">
          <InputsField/>
          <WordsList 
            data={data}
            changeWordLevel={this.changeWordLevel}
            />
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;