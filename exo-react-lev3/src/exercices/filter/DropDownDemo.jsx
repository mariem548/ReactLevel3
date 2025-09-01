import { useEffect, useState } from "react";
import AutoFilterDropdown from "./AutoFilterDropdown";
import { categoryList } from "./DropDown.utils";

export default function DropdownDemo() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUserList);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Catégories (statique)</h2>
      <AutoFilterDropdown
        data={categoryList}
        labelKey="name"
        valueChange={setSelectedCategory}
      />
      {selectedCategory && (
        <p>Catégorie sélectionnée : {selectedCategory.name}</p>
      )}

      <h2 style={{ marginTop: "3rem" }}>Utilisateurs (API)</h2>
      <AutoFilterDropdown
        data={userList}
        labelKey="name"
        valueChange={setSelectedUser}
      />
      {selectedUser && <p>Utilisateur sélectionné : {selectedUser.name}</p>}
    </div>
  );
}
