//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: ""
};

const time = new Date().getDate;
let timeOfDay = time;
const localTime = new Date().toLocaleTimeString();

if (time < 12) {
  timeOfDay = "morning";
  customStyle.color = "red";
} else if (time < 18) {
  timeOfDay = "afternoon";
  customStyle.color = "green";
} else {
  timeOfDay = "evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      Good {timeOfDay}, the time is {localTime}
    </h1>
  </div>,

  document.getElementById("root")
);
