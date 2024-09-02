import { valueFromParent } from "@bencoveney/parent/index.js";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>{valueFromParent}</p>
    </>
  );
}

export default App;
