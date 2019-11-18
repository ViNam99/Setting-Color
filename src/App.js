import React, { Component } from 'react';
import ColorPicker from './Components/ColorPicker';
import SettingSize from './Components/SettingSize';
import Reset from './Components/Reset';
import Result from './Components/Result';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12,
    }
  }
  onSetColorApp = (params) => {
    this.setState({
      color: params
    })
  }
  onChangeSizeApp = (value) => {
    const { fontSize } = this.state
    this.setState({
      fontSize: (fontSize + value >= 8 && fontSize + value <= 36) ? fontSize + value : fontSize
    })
  }
  onSetDefaultApp = (value) => {
    if (value) {
      this.setState({
        color: 'red',
        fontSize: 12
      });
    }
  }
  render() {
    const { color, fontSize } = this.state
    return (
      <div className="App ">
        <div className="container mt-50">
          <div className="row">
            <ColorPicker
              colorApp={color}
              onReciveColor={this.onSetColorApp}
            ></ColorPicker >
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SettingSize fontSizeApp={fontSize}
                onChangeSize={this.onChangeSizeApp}
              ></SettingSize>
              <Reset onSetDefault={this.onSetDefaultApp}></Reset>
            </div>

          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Result colorApp={color}
                fontSizeApp={fontSize}
              ></Result>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;