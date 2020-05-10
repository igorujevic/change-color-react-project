import React from 'react';

import './App.css';
import ButtonColorPicker from './components/ButtonColorPicker/ButtonColorPicker';

import { getData } from './api/index';

const url = 'http://www.colr.org/json/color/random';

class App extends React.Component {
  // constructor is unnecessary
  state = {
    dataColors: '',
  };

  changeColor = async () => {
    let colorData = await getData(url);
    // console.log(colorData);
    this.setState({ dataColors: colorData });
  };

  render() {
    return (
      <div className="App">
        <ButtonColorPicker
          changeColor={this.changeColor}
          textColor={this.state.dataColors}
        ></ButtonColorPicker>
      </div>
    );
  }
}

export default App;
