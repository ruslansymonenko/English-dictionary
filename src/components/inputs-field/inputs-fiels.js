import { Component } from "react";

import './inputs-field.css';

class InputsField extends Component {


  render() {
    return(
      <div className="inputs-field">
        <div className="inputs-field__header">
          <h1 className="inputs-field__header-text">
            English dictionary
          </h1>
        </div>
        <form className="inputs-field__form" action="#">
          <h3 className="inputs-field__form-header">
            Please, add new word with translation
          </h3>
          <input className="inputs-field__form-word inputs-field__form-input" type="text" placeholder="Word"/>
          <input className="inputs-field__form-translation inputs-field__form-input" type="text"  placeholder="Translation"/>
          <select className="inputs-field__form-level" name="learn-level" id="learn-level">
            <option value="">--level of knowledge--</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button className="inputs-field__form-btn">Confirm</button>
        </form>
      </div>
    )
  }
}

export default InputsField;