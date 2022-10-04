import React, { useEffect } from "react";
import "./index.css";
import { useState } from "react";

function App() {
  const [finalReversedWord, setFinalReversedWord] = useState("GGG");
  function getSpaces(sentence) {
    let space = [];
    let resultSpaces = "";
    let prevChar;
    for (let index = 0; index < sentence.length; index++) {
      let currentChar = sentence.charAt(index);

      if (currentChar === " ") {
        let tempResult = resultSpaces;
        resultSpaces = tempResult.concat(" ");
      }

      if (
        (currentChar !== " " && prevChar === " ") ||
        index === sentence.length - 1
      ) {
        space.push(resultSpaces);
        resultSpaces = "";
      }
      prevChar = sentence.charAt(index);
    }
    return space;
  }

  function getWords(sentence) {
    let tempWords = sentence.split(" ");

    for (let index = 0; index < tempWords.length; index++) {
      if (tempWords[index] === "") {
        tempWords.splice(index, 1);
        index = -1;
      }
    }
    return tempWords;
  }

  function getReversedSentence() {
    let sentence = document.getElementById("textInput").value
    let words = getWords(sentence);
    let spaces = getSpaces(sentence);
    let reversedWord = [];
    let wordsLength = words.length;

    if (sentence.charAt(0) !== " ") {
      for (let index = 0; index < words.length; index++) {
        wordsLength--;
        reversedWord.push(words[wordsLength]);
        reversedWord.push(spaces[index]);
      }
      setFinalReversedWord(reversedWord.join(""))
      console.log(reversedWord.join(""))
      return;
    }

    for (let index = 0; index < spaces.length; index++) {
      wordsLength--;
      reversedWord.push(spaces[index]);
      reversedWord.push(words[wordsLength]);
    }
    console.log(reversedWord.join(""))
    setFinalReversedWord(reversedWord.join(""));
  }

  useEffect(() => {
    window.addEventListener('load', function(){
      this.window.alert("Please open up browser console for better view of result.")
    })
  })

  return (
    <div className="container">
        <div className="div-wrap">
          <div className="div-wrap-2">
            <label
              id="lbl_first_name"
              className="padding-component"
            >
              Text Input:
            </label>
            <input
              type="text"
              id="textInput"
              name="name"
              className="padding-component"
            />
            <button
              className="padding-component"
              id="btn-submit"
              onClick={getReversedSentence}
            >
              Submit
            </button>
            <br></br>
            <label
              id="lbl_first_name"
              className="padding-component"
            >
              {finalReversedWord}
            </label>
          </div>
        </div>
     
    </div>
  );
}

export default App;
