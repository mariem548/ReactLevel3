import { useState } from "react";
import { useStorage } from "./useStorage";

export default function SetterComponent() {
  const [input, setInput] = useState("");
  const [, setStoredValue] = useStorage("shared-key");

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
