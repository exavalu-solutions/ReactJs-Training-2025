import React, { useEffect } from 'react'
import { useState } from 'react';
import { createUser, deleteUser, getUsers, updateUser } from '../service/userService';

export const UserList = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editedUserId, setEditedUserId] = useState(null);
    const [editedName, setEditedName] = useState("");
    const [editedEmail, setEditedEmail] = useState("");
    const [originalUser, setOriginalUser] = useState(null);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await getUsers();
            console.log("response : ", response.data);
            setLoading(false);
            setUsers(response.data);
            // users.name = "Jane";
            // setUsers(users);
            // setUsers({...user, email: "Jane@gmail.com"});
            console.log(users)
        } catch (error) {
            setError("Failed to fetch users");
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(users.length > 0) {
            // do any implementation
            // console.log("user list : ", users);
        }
    }, [users])
    // console.log("user list : ", users);
    const handleAddUser = async () => {
        if (!name || !email) {
            setError("name and email are required");
            return;
        }
        setLoading(true);
        try {
            const newUser = {
                name: name,
                email: email
            }
            await createUser(newUser);
            fetchUsers();
            setName("");
            setEmail("");
        } catch (error) {
            setError("Failed to add user");
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    const handleUpdateState = (user) => {
        setEditedUserId(user.id);
        setEditedName(user.name);
        setEditedEmail(user.email);
        setOriginalUser({
            name: user.name,
            email: user.email
        })
    }

    const handleCancelEdit = () => {
        setEditedUserId(null);
        setEditedName("");
        setEditedEmail("");
    }

    const handleUpdate = async (id) => {
        setLoading(true);
        const existingUser = users.find(user => user.id === id);
        const updatedUser = {
            ...existingUser,
            name: editedName,
            email: editedEmail
        }
        try {
            await updateUser(id, updatedUser);
            setEditedUserId(null);
            setEditedName("");
            setEditedEmail("");

            await fetchUsers();
        } catch (error) {
            setError("Failed to update user");
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    const hasSomeChanges = originalUser && (editedName !== originalUser.name || editedEmail !== originalUser.email)

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            await deleteUser(id);
            await fetchUsers();
        } catch (error) {
            setError("Failed to delete user");
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading &&
                <p>
                    Loading...
                </p>}
            {error && <p style={{ color: "red" }}>
                {error}
            </p>}
            <div>
                <h2>Axios CRUD Operation with JSON Server</h2>
                <input
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleAddUser}>Add User</button>
            </div>

            <hr />

            <ul>
                {users.map((user, id) => (
                    <li key={user.id}>
                        {editedUserId === user.id ?
                            (
                                <>
                                    <input
                                        placeholder='Name'
                                        value={editedName}
                                        onChange={(e) => setEditedName(e.target.value)}
                                    />
                                    <input
                                        placeholder='Email'
                                        value={editedEmail}
                                        onChange={(e) => setEditedEmail(e.target.value)}
                                    />
                                    <button onClick={() => handleUpdate(user.id)} disabled={!hasSomeChanges}>Save</button>
                                    <button onClick={() => handleCancelEdit()}>Cancel</button>
                                </>
                            )
                            :
                            (
                                <>
                                    {user?.name} - {user?.email}
                                    <button onClick={() => handleUpdateState(user)}>Update</button>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </>
                            )
                        }
                    </li>
                ))}
            </ul>
        </>
    )
}
