import React from 'react';

import './App.css';
import ButtonColorPicker from './components/ButtonColorPicker/ButtonColorPicker';
import ShowText from './components/ShowText/ShowText';
import InputText from './components/InputText/InputText';

import { AppProvider } from './AppContext';
import ColorList from './components/ColorList/ColorList';
import { WritingProvider } from './WritingContext';

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <div className="app-container">
          <div className="color-container">
            <ButtonColorPicker />
            <ColorList />
          </div>
          <WritingProvider>
            <div className="text-container">
              <ShowText />
              <InputText />
            </div>
          </WritingProvider>
        </div>
      </AppProvider>
    );
  }
}

export default App;
