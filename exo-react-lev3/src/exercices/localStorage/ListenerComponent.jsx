import { useStorage } from "./useStorage";

export default function ListenerComponent() {
  const [storedValue] = useStorage("shared-key");

  return (
    <div>
      <p>Valeur actuelle : {storedValue || ""}</p>
    </div>
  );
}
