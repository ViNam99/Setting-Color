import React, { Component } from 'react';

class Result extends Component {
    setStyle = () => {
        const { colorApp ,fontSizeApp} = this.props
        return {
            color: colorApp,
            borderColor: colorApp,
            fontSize: fontSizeApp
        }
    }
    render() {
        const { colorApp, fontSizeApp } = this.props
        return (
            <div className="Result">
                <p>Color {colorApp} : - FontSize : {fontSizeApp}px</p>
                {/*Nơi đây bắt buộc chương trình phải thực hiện hàm luôn vì result luôn có color đỏ đầu tiên */}
                <div id="content" style={this.setStyle()}>
                    Nội dung trong này ....
                </div>
            </div>
        );
    }
}

export default Result;