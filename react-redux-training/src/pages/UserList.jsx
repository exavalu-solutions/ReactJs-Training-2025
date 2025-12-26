import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, createUser, updateUser, deleteUser } from "../redux/actions/userActions";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editingUserId, setEditingUserId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setEditedName(user.name);
    setEditedEmail(user.email);
  };

  const handleSaveUpdate = (id) => {
    dispatch(updateUser(id, { name: editedName, email: editedEmail }));
    setEditingUserId(null);
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditedName("");
    setEditedEmail("");
  };

  const handleAddUser = () => {
    if (!name || !email) return;
    dispatch(createUser({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Redux Saga CRUD with Editable Rows</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={editingUserId !== null}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={editingUserId !== null}
        />
        <button onClick={handleAddUser} disabled={editingUserId !== null}>
          Add
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users && users.map((user) => (
          <li
            key={user.id}
            style={{ marginBottom: "1px", backgroundColor: editingUserId === user.id ? "white" : "", padding: "5px" }}
          >
            {editingUserId === user.id ? (
              <>
                <input
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
                <button onClick={() => handleSaveUpdate(user.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {user.name} - {user.email}
                <button onClick={() => handleEditClick(user)} disabled={editingUserId !== null}>
                  Update
                </button>
                <button onClick={() => dispatch(deleteUser(user.id))} disabled={editingUserId !== null}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
