import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('Enter text here')
    
    const pst=()=>{
setText(text+" "+1)

    }

const psto=()=>{
setText("")
}
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
        
    }

    return (
        <>
        <h5>{props.heading}</h5>
        <div className="mb-3">
        <label for="feedback" class="form-label">Feedback Form</label>
          <textarea className="form-control" id="feedbox" rows ="4" value={text} onChange={handleOnChange}></textarea><br/>
          <button className="btn btn-primary " onClick={psto}>Clear</button>
          <button className="btn btn-danger" onClick={pst}>update</button>


</div>
<div className="container">
    <h5>your text summary</h5>
    <h5>{text.split(" ").length}words and {text.length} characters</h5>
    <h5>{0.08*text.split(" ").length}inutes to read</h5>
</div>
</>
    )
}
