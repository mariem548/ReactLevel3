import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function SetterComponent() {
  const [input, setInput] = useState("");
  const [, setStoredValue] = useLocalStorage("shared-key");

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
