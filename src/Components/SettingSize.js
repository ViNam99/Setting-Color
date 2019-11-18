import React, { Component } from 'react';

class SettingSize extends Component {
    onChangeSize = (value) => () => {
        this.props.onChangeSize(value)
        
    }
    render() {
        const {fontSizeApp} = this.props
        return (
            <div className="SettingSize">

                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Setting Size : {fontSizeApp}px</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success" onClick = {this.onChangeSize(+2)}>Tăng</button> &nbsp;
                    <button type="button" className="btn btn-success" onClick =  {this.onChangeSize(-2)}>Giảm</button>

                    </div>
                </div>

            </div>
        );
    }
}

export default SettingSize;