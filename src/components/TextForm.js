import React from 'react'


export default function TextForm(props) { 
    const text=props.text;
    const setText=props.setText;
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        // var text=document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();  you don't require to select the text while using the navigatore api;
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success")
    }

    const handleClearText=()=>{
        setText("");
        props.showAlert("Cleared text","success")
    }

    const handleExtraSpaces=()=>{
        setText(text.replace(/[ ]+/g,' ').trim())
        props.showAlert("Removed extra spaces","success")
    }

    const bgTheme=({
        color:props.theme.textColor,
        backgroundColor : props.theme.bgColor,
    })
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

                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
            </div>
            <div className='container my-2' style={bgTheme}  >
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter(function (elmnt) {
                    return elmnt !== "";
                }).length} word and {text.length} characters</p>

                <h2>Preview</h2>
                <p>{text.split(/\s+/).filter(function (elmnt) {
                    return elmnt !== "";
                }).length>0? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
