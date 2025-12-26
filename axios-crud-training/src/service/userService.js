import axiosInstance from "../api/axiosInstance"

// GET - fetch all users
export const getUsers = () =>{
    return axiosInstance.get("/users");
}

// POST - create a new user
export const createUser = (userData) => {
    return axiosInstance.post("/users", userData);
}

// Put - update existing user
export const updateUser = (id, updatedUserData) => {
    console.log("id : ", id)
    console.log("updatedUserData : ", updatedUserData)
    return axiosInstance.put(`/users/${id}`, updatedUserData);
} 

// Delete - Removing existing user
export const deleteUser = (id) => {
    return axiosInstance.delete(`/users/${id}`);
}
