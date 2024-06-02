import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import { StarRating } from "./StarRating";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const messages = [
  "terrible",
  "so bad",
  "bad",
  "soso",
  "good",
  "so good",
  "very good",
  "super good",
  "awesome",
  "god!!",
];

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} messages={messages} />
    <StarRating color="red" size={24} defaultRating={3} />

    <Test />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
