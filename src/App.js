import React, { useState } from 'react';
import './index.css';

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMeassage] = useState('')

  let bmiCalculator = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a vaild weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
      //Logic for result
      if (bmi < 18.5) {
        setMeassage('You are underweight')
      } else if (bmi >= 18.6 && bmi < 24.9) {
        setMeassage('You are a healthy weight')
      } else {
        setMeassage('You are overweight')
      }

    }
  }

  let imgSrc = ''
  // show image on bmi calculation
  if (bmi < 1) {
    imgSrc = null
  } else {
    if (bmi < 18.5) {
      imgSrc = require('../src/assets/img/uderweight.png')
    } else if (bmi >= 18.6 && bmi < 24.9) {
      imgSrc = require('../src/assets/img/healthy.png')
    } else {
      imgSrc = require('../src/assets/img/overweight.png')
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header-title">
          <h2> BMI CalCulator</h2>
        </div>
        <form className="bmi-form" onSubmit={bmiCalculator}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-reload" type="submit" onClick={reload}>Reload</button>
        </form>
        <div className="result">
          <h3>Your BMI is {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-box">
          <img src={imgSrc} alt='' ></img>
        </div>

      </div>
    </div>
  );
}

export default App;
