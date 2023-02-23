import {Component} from "react";

import InputsField from "../inputs-field/inputs-fiels";
import WordsList from "../words-list/words-list";
import Footer from "../footer/footer";
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="app-fields">
          <InputsField/>
          <WordsList/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;