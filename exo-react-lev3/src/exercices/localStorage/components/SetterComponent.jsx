import { useState } from "react";
import { UseStorage } from "../UseStorage";

export default function SetterComponent() {
  const [input, setInput] = useState("");
  const [, setStoredValue] = UseStorage("shared-key");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setStoredValue(input)}>Valider</button>
    </div>
  );
}
