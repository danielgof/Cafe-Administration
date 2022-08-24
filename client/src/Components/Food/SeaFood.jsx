import React, { Component } from 'react';
import logo from './Styles/Seafood.jpg';

class Image extends Component {
    render() {
    var squareStyle = {
        backgroundImage: `url(${logo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '80%'
        };
    return (
        <div style={squareStyle}>
        </div>
    );
}
}


class Label extends Component {
    render() {
        var labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
            };
        return (
            <p style={labelStyle}>SeaFood</p>
        );
    }
}


export default class SeaFood extends Component {
    
    render() { 
        var cardStyle = {
            height: 300,
            width: 250,
            padding: 0,
            backgroundColor: "#FFF",
            boxShadow: "0px 0px 5px #666"
            };
        return (
            <div style={cardStyle}>
                <Image color={this.props.color} />
                <Label />
            </div>
        );
    }
}