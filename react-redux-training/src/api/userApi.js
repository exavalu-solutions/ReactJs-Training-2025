import axios from "axios";

const BASE_URL = "http://localhost:3001/users";

// GET
export const fetchUsersApi = () => axios.get(BASE_URL);

// POST
export const createUserApi = (data) => axios.post(BASE_URL, data);

// PUT
export const updateUserApi = (id, data) =>
  axios.put(`${BASE_URL}/${id}`, data);

// DELETE
export const deleteUserApi = (id) =>
  axios.delete(`${BASE_URL}/${id}`);
