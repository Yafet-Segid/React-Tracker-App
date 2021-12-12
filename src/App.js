import { useState } from "react";

function App() {
  const [counter, setcounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          var number = 1;
          setcounter(counter + number);
        }}
      >
        Add Yes
      </button>
    </div>
  );
}

export default App;
