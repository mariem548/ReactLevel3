import "./App.css";
import ListenerComponent from "./exercices/localStorage/components/ListenerComponent";
import SetterComponent from "./exercices/localStorage/components/SetterComponent";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Gestionnaire LocalStorage </h1>
      <SetterComponent />
      <ListenerComponent />
    </div>
  );
}
