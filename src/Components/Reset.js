import React, { Component } from 'react';

class Reset extends Component {
    onSetDefault = () => {
        this.props.onSetDefault(true)
    }
    render() {
        return (
            <div className="Reset">
                <button type="button" className="btn btn-danger" onClick={this.onSetDefault}>Reset</button>
            </div>
        );
    }
}

export default Reset;