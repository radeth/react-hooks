import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [input,setInput] = React.useState('')
  const [isHidden,hideElement] = React.useState(true)
  return (
    <div className="App">
     {input}
      <input value={input} onInput={e => setInput(e.target.value)} />
      <input onClick={()=>hideElement(!isHidden)} value={isHidden ? "show" : "hide"} type="button"/>
      {isHidden ? null : <div>element</div>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
