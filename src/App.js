import React, { useState } from 'react';
import './App.css';
const animals = {
  "🦍": "Gorilla",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🕊️": "Dove",
  "🦖": "T-Rex",
  "🦕": "Sauropod",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐄": "Cow",
  "🐃": "Water Buffalo",
  "🐂": "Ox",
  "🐑 ": "Ewe",
  "🐐": "Goat",
  "🐌": "Snail",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🐝": "Honeybee",
  "🦒": "Giraffe",
  "🐘": " Elephant",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐇": "Rabbit",
  "🦘": "Kangaroo",
  "🦋": "Butterfly",
  "🐨": "Koala",
  "🐼": "Panda",
  "🐬": "Dolphin",
};
const App = () => {
  const animalList = Object.keys(animals) //it will convert iinto list 
  const [mening, setMening] = useState("Enter Emoji")
  const emojihandler = event => {
  
    let emoj = event.target.value;
    let realmening;
    if (emoj in animals) {
      realmening = animals[emoj];
    } else if (emoj === "") {
      realmening = "we don't have this in our emojilist"
    } else {
      realmening = "Enter below emoji or click on emoji"
    }
    setMening(realmening);
  }
  
  const checkEmojiName = emo => {
    let realmening = animals[emo];
    setMening(realmening);
  };

  return (
    <div>
      <center><h1 className="text">Animal Emoji Pedia</h1></center>
      <input onChange={emojihandler} />
      <center><h1 className="text-center">{mening}</h1></center>
    
      <div className="container">
        <div className="emogrid">
          {animalList.map(item => (
            <span onClick={() => checkEmojiName(item)}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
