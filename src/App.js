import React, { useState } from "react";
import "./styles.css";

var emojidata = {
  "👶": "Baby",
  "👼": " Baby Angel",
  "🎅": "Santa Claus",
  "🤶": "Mrs. Claus",

  "🧝‍♂️": "Man Elf",
  "🧝‍♀️": " Woman Elf",
  "👪": "Family",

  "🍪": " Cookie",
  "🥛": " Glass of Milk",
  "🍷": "Wine Glass",
  "🍴": "Fork and Knife",
  "⛪": "Church",
  "🌟": "Glowing Star",

  "☃️": "Snowman",
  "⛄": "Snowman Without Snow",
  "🔥 ": "Fire",
  "🎄": "Christmas Tree",
  "🎁": "Wrapped Gift",
  "🧦": "Socks",
  "🔔": "Bell",
  "🎶": "Musical Notes",
  "🕯️": "Candle",
  "🛐": "Place of Worship",
  "✝️": " Latin Cross",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw"
};

var knownemoji = Object.keys(emojidata);

export default function App() {
  const [meanEmoji, currentEmoji] = useState("");

  function emojiChangevent(event) {
    var targetEvent = event.target.value;

    var meanEmoji = emojidata[targetEvent];

    if (meanEmoji === undefined) {
      meanEmoji = "Oops! we don't have that emoji";
    }
    currentEmoji(meanEmoji);
  }

  function emojiclickevent(emoji) {
    // processing
    var meanEmoji = emojidata[emoji];
    currentEmoji(meanEmoji);
  }
  return (
    <div className="App">
      <header>
        {" "}
        <h1 id="header">
          Christmas <span>Emotags</span>
        </h1>
      </header>

      <input onChange={emojiChangevent} />

      <h3 id="header-3" style={{ fontStyle: "italic" }}>
        {" "}
        {meanEmoji}{" "}
      </h3>

      <h2 id="header-2">Emojies we have: 👇 </h2>

      {knownemoji.map(function (emoji) {
        return (
          <ul>
            <li onClick={() => emojiclickevent(emoji)} key={emoji}>
              {emoji}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
