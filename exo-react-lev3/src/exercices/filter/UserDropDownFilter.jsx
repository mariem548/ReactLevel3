import { useEffect, useState } from "react";
import AutoFilterDropdown from "./AutoFilterDropdown";

export default function UserDropDownFilter() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUserList);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <AutoFilterDropdown
        data={userList}
        labelKey="name"
        valueChange={setSelectedUser}
      />

      {selectedUser && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Utilisateur sélectionné :</h3>
          <p>
            <strong>Nom :</strong> {selectedUser.name}
          </p>
          <p>
            <strong>Email :</strong> {selectedUser.email}
          </p>
          <p>
            <strong>Ville :</strong> {selectedUser.address.city}
          </p>
        </div>
      )}
    </div>
  );
}
