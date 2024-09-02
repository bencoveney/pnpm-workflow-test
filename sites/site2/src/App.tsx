import { valueFromChild } from "@bencoveney/child/index.js";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>{valueFromChild}</p>
    </>
  );
}

export default App;
