import { UseStorage } from "../UseStorage";

export default function ListenerComponent() {
  const [storedValue] = UseStorage("shared-key");

  return (
    <div>
      <p>Valeur actuelle : {storedValue || ""}</p>
    </div>
  );
}
