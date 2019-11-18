import React, { Component } from 'react';

class SettingSize extends Component {
    render() {
        return (
            <div className="SettingSize">

                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Setting Size : px</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success" >Tăng</button> &nbsp;
                    <button type="button" className="btn btn-success" >Giảm</button>

                    </div>
                </div>

            </div>
        );
    }
}

export default SettingSize;