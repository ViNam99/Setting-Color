import React, { Component } from 'react';
import ColorPicker from './Components/ColorPicker';
import SettingSize from './Components/SettingSize';
import Reset from './Components/Reset';
import Result from './Components/Result';
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App ">
        <div className="container mt-50">
          <div className="row">
              <ColorPicker></ColorPicker>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SettingSize></SettingSize>
            <Reset></Reset>
            </div>

          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Result></Result>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;