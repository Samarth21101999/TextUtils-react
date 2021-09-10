import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log('Uppercase was clicked');
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","Success")
    }
    const handleLowClick=()=>{
        //console.log('Uppercase was clicked');
        let newText=text.toLowerCase();
        setText(newText)
         props.showAlert("Converted to lowercase!","Success")
    }
     const handleOnChange=(event)=>{
        //console.log("On change")
         setText(event.target.value);
         //props.showAlert(event.target.value)
         
     }
     const clearText=(event)=>{
         let newText=document.getElementById('clear').value="";
         setText(newText);
          props.showAlert("Text cleared!","Success")
     }
     const copyText=()=>{
         let text=document.getElementById('myBox');
         text.select();
         text.setSelectionRange(0,9999);
         navigator.clipboard.writeText(text.value);
          props.showAlert("Text Copied!","Success")
     }
     const handleExtraSpaces=()=>{
         let newText=text.split(/[ ]+/);
         setText(newText.join(" "))
          props.showAlert("Extraspaces removed!","Success")
     }
     const myStyle={
         backgroundColor:props.mode==='light'?'white':'black',
         color:props.mode==='light'?'black':'white'

     }

    //eslint-disable-next-line
    const [text,setText]=useState('');
    //text="newText";//Wrong way to change the text
    //setText("Enter the text here");//Correct way to change
    return (
        <>
        <div className="container" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnChange} style={myStyle} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>Convert to Lowercase</button>
            <button id="clear"className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container mb-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textbox to preview'}</p>
        </div>
        </>
    )
}
