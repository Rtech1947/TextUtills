import React ,{useState} from 'react'

export default function TextForm(props)
{
    const handleUpClick =()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to upper case','success');
    }
    const handleLoClick =()=>{
        let newtext = text.toLowerCase();
         setText(newtext);
         props.showAlert('Converted to lower case','success');
    }
    const handleClearClick =()=>{
        let newtext = "";
         setText(newtext);
         props.showAlert('text cleared','success');
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('copied to clipboard','success');
    }

    
    const [text, setText] = useState("Enter the text");
    // text = "updating text's //value" this is the wrong way
    // text = setText("updating text's value") //this is the right way to update the text's value
    return(
    <div style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.text}</h1>
        <div className="mb-3" >
         <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} type="submit" class="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper case</button>
        <button disabled={text.length===0} type="submit" class="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lower case</button>
        <button disabled={text.length===0} type="submit" class="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} type="submit" class="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
        <div className='container'>
            <h1>text summary</h1>
            <p>It contains {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} character</p>
            <p>It will takes {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minute to read approximately</p>
            <h2>preview</h2>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
    </div>
    );
}