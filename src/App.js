import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

class App extends Component { // BrowserRouter -> we configure our app to make use of React Router

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
