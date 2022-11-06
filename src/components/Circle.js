import React from 'react'

export default function Circle(props) {
    const circleStyle = {
        margin: 5,
        backgroundColor: props.color,
        borderRadius: "50%",
        width: 30,
        height: 30,
        display: "inline-block",
        border:"none",
    }
    
    return (
        <button style={circleStyle} onClick={props.onPress}></button>
        
    )
}
