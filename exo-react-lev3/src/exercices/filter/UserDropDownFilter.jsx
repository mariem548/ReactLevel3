import { useEffect, useState } from "react";
import AutoFilterDropdown from "./AutoFilterDropdown";

export default function UserDropDownFilter() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <AutoFilterDropdown
        data={users}
        labelKey="name"
        valueChange={(val) => setSelectedUser(val)}
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
