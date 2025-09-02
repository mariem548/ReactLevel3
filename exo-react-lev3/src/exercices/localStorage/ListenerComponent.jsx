import { useLocalStorage } from "./useLocalStorage";

export default function ListenerComponent() {
  const [storedValue] = useLocalStorage("shared-key");

  return (
    <div>
      <p>Valeur actuelle : {storedValue || ""}</p>
    </div>
  );
}
