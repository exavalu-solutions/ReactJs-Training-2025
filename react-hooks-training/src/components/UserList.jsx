import { useState, useEffect } from "react";
import axios from 'axios';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     // console.log("res >> ", res);
    //     if (!res.ok) { // 200 - 299
    //       throw new Error("Failed to fetch users");
    //     }
    //     // console.log("res >> ", res.json())
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("data>> ", data)
    //     setUsers(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log("err", err)
    //     setError(err.message);
    //     setLoading(false);
    //   });

    axios
      .get("https://jsonplaceholder.typicode.com/users", 
        {
          headers : {
            "Content-Type" : "application/json",
          }
        }
      )
      .then((response) => {
        // axios automatically converts response to JSON
        console.log(response)
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // axios throws error automatically for non-2xx responses
        setError(error.message);
        setLoading(false);
      });
  }, []); // API call only once

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;