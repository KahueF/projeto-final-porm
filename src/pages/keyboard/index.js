import { RiDeleteBack2Line } from "react-icons/ri";
import React, { useEffect, useState } from 'react';
import './keyboard.css';
import {cpfMask} from '../../mascaras/cpf'
import axios from "axios";


const NumericKeypad = () => {
  const [input, setInput] = useState('');

const [apiData, setApiData] = useState([])

function fetchData() {
  axios.get('http://localhost:8080/pessoas')  
  .then((response) => setApiData(response.data))
}
  
  useEffect(() => {
    fetchData()
  }, [] )
  console.log(apiData)

  const handleButtonClick = (value) => {
    setInput((prevInput) => cpfMask(prevInput + value));
  };

  const handleClearButtonClick = () => {
    setInput('');
  };

  const handleBackspaceButtonClick = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 9; i++) {
      buttons.push(
        <button className="buttonKeyboard" key={i} onClick={() => handleButtonClick(i.toString())}>
          {i}
        </button>
      );
    }

    buttons.push(
        <button className="buttonKeyboard" key="backspace" onClick={handleBackspaceButtonClick}>
          <RiDeleteBack2Line />
        </button>
      );

    buttons.push(
      <button className="buttonKeyboard" key="0" onClick={() => handleButtonClick('0')}>
        0
      </button>
    );



    buttons.push(
      <button className="buttonKeyboard" onClick={() => window.location.assign('/dados')}>
        ok
      </button>
    );

    return buttons;
  };

  return (
    <div>
        <div className="divCpf">
            <p>Qual seu CPF? </p>
        </div>
        <input className="cpf" type="text" value={input} readOnly />
        <div className="numeric-keypad">{renderButtons()}</div>
    </div>
);
};

export default NumericKeypad;