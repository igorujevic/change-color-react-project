import React from 'react';

import './App.css';
import ButtonColorPicker from './components/ButtonColorPicker/ButtonColorPicker';
// import ShowText from './components/ShowText/ShowText';
// import InputText from './components/InputText/InputText';

import { getData } from './api/index';

import { AppProvider } from './AppContext';
import ColorList from './components/ColorList/ColorList';

const url = 'http://www.colr.org/json/color/random';

class App extends React.Component {
  // constructor is unnecessary
  state = {
    dataColors: '',
    inputData: '',
  };

  changeColor = async () => {
    let colorData = await getData(url);
    console.log(colorData);
    this.setState({ dataColors: colorData });
  };

  handleInput(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <AppProvider>
        <div className="app-container">
          <div className="color-container">
            <ButtonColorPicker />
            <ColorList />
          </div>
          <div className="text-container">
            <h1>Write..</h1>
          </div>
        </div>
      </AppProvider>
    );
  }
}

export default App;
