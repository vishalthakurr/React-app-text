import React, { useState } from "react";

export default function TextForm(props) {
  
  
  const handelupclick = () => {
    // console.log("upper case" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("converted to Upper case" ,"success")
  };

  const handelclearclick = () => {
    setText("");
    props.showalert("Clear Text Successful" ,"success")

  };

  // --------------------------------------------
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // })

  // const [mode, setmode] = useState("Dark mode")
  // const handelcoclick = () => {

  //   if (mystyle.color === 'white') {

  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //     setmode("Dark mode")

  //   }
  //   else {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black"
  //     })
  //     setmode("light mode")

  //   }

  // };
  // -------------------------------------
  const handelonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className = "container"  style={{ color: props.mode === 'dark' ?   'white':'black ' }}>
        <h1  >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelonchange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{backgroundColor : props.mode === 'dark' ?  'gray ': 'white' }}
          ></textarea>

          <button className="btn my-4 btn-primary mx-3" onClick={handelupclick}>
            convert to uppercase
          </button>
          <button className="btn my-4 btn-primary mx-3" onClick={handelclearclick}>
            Clear
          </button>
         
        </div>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ?   'white':'black ' }}>
        <h2> your text summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>

        <h2>Reading time </h2>
        <p>{0.008 * text.split(" ").length} Minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text: "somthing Write to the preview here"}</p>
      </div>
    </>
  );
}
