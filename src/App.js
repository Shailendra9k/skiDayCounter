import React from "react";
import "./App.css";
import SkiDayCounter from "./SkiDayCounter";

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SkiDayCounter
          total={skiData.total}
          powder={skiData.powder}
          backcountry={skiData.backcountry}
          goal={skiData.goal}
        />
      </header>
    </div>
  );
}

export default App;
