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
        {id: 1, word: 'Hello', translation: 'Привіт', level: 2, favorite: false},
        {id: 2, word: 'Shop', translation: 'Магазин', level: 3, favorite: false},
        {id: 3, word: 'Book', translation: 'Книга', level: 1, favorite: false},
      ]
    }
  }

  render() {
    const {data} = this.state;

    return(
      <div className="App">
        <div className="app-fields">
          <InputsField/>
          <WordsList data={data}/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;