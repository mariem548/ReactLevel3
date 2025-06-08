import { useEffect, useState } from "react";
import AutoFilterDropdown from "./AutoFilterDropdown";
import { staticData } from "./DropDown.utils";

export default function DropdownDemo() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2> Dropdown statique (catégories)</h2>
      <AutoFilterDropdown
        data={staticData}
        labelKey="name"
        valueChange={setSelectedCategory}
      />
      {selectedCategory && (
        <p>Catégorie sélectionnée : {selectedCategory.name}</p>
      )}

      <h2 style={{ marginTop: "3rem" }}> Dropdown dynamique (API users)</h2>
      <AutoFilterDropdown
        data={users}
        labelKey="name"
        valueChange={setSelectedUser}
      />
      {selectedUser && <p>Utilisateur sélectionné : {selectedUser.name}</p>}
    </div>
  );
}
