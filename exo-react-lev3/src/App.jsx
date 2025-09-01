import "./App.css";
import DialogDemo from "./exercices/dialog/DialogDemo";
import DropdownDemo from "./exercices/filter/DropDownDemo";
import ListenerComponent from "./exercices/localStorage/ListenerComponent";
import SetterComponent from "./exercices/localStorage/SetterComponent";

export default function App() {
  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>Gestionnaire LocalStorage </h1>
        <SetterComponent />
        <ListenerComponent />
      </div>
      <div>
        <h1>Gestionnaire de modal </h1> <DialogDemo />
      </div>

      <div>
        <h1>Gestionnaire de filtre </h1>
        <DropdownDemo />
      </div>
    </>
  );
}
