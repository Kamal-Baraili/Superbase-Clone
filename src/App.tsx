import { useState } from "react";
import "./styles/index.css";
import Index from "./constants";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Index />
    </>
  );
}

export default App;
