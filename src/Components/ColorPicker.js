import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'yellow', 'green', 'blue', 'violet', 'pink']
        }
    }

    showColors = (color) => {
        
        return {
            backgroundColor: color
        }
    }
    setActiveColor = (color) => () => {
        this.props.onReciveColor(color)
    }
    render() {
        const { colors } = this.state;
        const {colorApp} = this.props;
        let elmColor = colors.map((color, index) => {
            return (
                <span 
                        key={index} 
                        style={this.showColors(color)}
                        className = {colorApp === color ? 'active' : ''}
                        onClick = {this.setActiveColor(color)}
                >    
                </span>
            );
        })
        return (
            <div className="ColorPicker">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3 className="panel-title">Color Picker</h3>
                        </div>
                        <div className="panel-body">
                            {elmColor}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;