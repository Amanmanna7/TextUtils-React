import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }
    const handleLoClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success")
    }
    const handleOnChange = (event) => {
        console.log("Changed value");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
    }

    const bgTheme=({
        color:props.theme.textColor,
        backgroundColor : props.theme.bgColor,
    })
    
    const [text, setText] = useState('');

    


    // text ='new text'  // wrong way
    // setText("new text") // Correct way to change the state

    return (
        
        < >
            <div className='container' style={bgTheme}>
                <h1>{props.heading}</h1>
                <div className="my-3" style={bgTheme}>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" 
                    style={bgTheme}></textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            </div>
            <div className='container my-2' style={bgTheme}  >
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter(function (elmnt) {
                    return elmnt !== "";
                }).length} word and {text.length} characters</p>

                <h2>Preview</h2>
                <p>{text.split(" ").filter(function (elmnt) {
                    return elmnt !== "";
                }).length>0? text : "Enter something in textbox to preview"}</p>
            </div>
        </>
    )
}
