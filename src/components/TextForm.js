import React, {useState} from 'react'

function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Text capitalised!", "success");
  }
 const handleExtraSpaces = ()=>{
  let newText = text.replace(/\s+/g, ' ').trim();
  setText(newText);
  props.showAlert("Extra spaces removed!", "success");
  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  }
 const handleReClick = ()=>{
  const words = text.split(' ');
  words.pop();
  let newText = words.join(' ') ;
  setText(newText);
  props.showAlert("Last word removed!", "success");
  }
  const handleRtClick =(event) =>{
    setText((text +' ').repeat(2));
    props.showAlert("Text repeated!", "success");
    }
  const handleClearClick = () => {
    let newText = ('');
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  // text = "'new text"; this is wrong way to change the state
  // setText("new text"); correct way to set text
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : '#042743'}} rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize the text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={copyText}>Copy to clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleReClick}>Remove last Word</button>
        <button className="btn btn-primary mx-1" onClick={handleRtClick}>Repeat text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length -1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length - 0.008} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

export default TextForm