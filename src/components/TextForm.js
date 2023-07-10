import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase", "success");
  };

  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText('');
    props.showAlert("Text cleared", "success");
  };

  const handleDownload = () => {
    const file = new Blob([text], { type: 'text/plain' });

    const element = document.createElement('a');
    element.href = URL.createObjectURL(file);
    element.download = `TextFile${Date.now()}.txt`; // Use backticks to include the dynamic timestamp in the filename.

    document.body.appendChild(element);
    element.click();
    props.showAlert("Downloaded", "success");
  };

  const handleSpeak = () => {
    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
    props.showAlert("Text converted to speech", "success");
  };

  return (
    <>
      <div className="container my-5">
        <h4 style={{ color: props.mode === 'grey' ? 'black' : 'white' }}>Enter Your Text Here Below</h4>
        <textarea
          className="form-control"
          style={{
            color: props.mode === 'grey' ? 'black' : 'white',
            backgroundColor: props.mode === 'grey' ? 'rgba(0,0,0,.2)' : 'black',
            height: '250px',
            width: '100%',
            borderRadius: '20px',
            boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
           
          }}
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-4" onClick={handleUpper}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLower}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownload}>
          Download file
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpeak}>
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === 'grey' ? 'black' : 'white',
        }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  mode: PropTypes.string,
  showAlert: PropTypes.func.isRequired,
};
