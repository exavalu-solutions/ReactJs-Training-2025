// ACTION TYPES
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";

// ACTION CREATORS
export const fetchUsers = () => ({
  type: FETCH_USERS_REQUEST
});

export const createUser = (user) => ({
  type: CREATE_USER_REQUEST,
  payload: user
});

export const updateUser = (id, user) => ({
  type: UPDATE_USER_REQUEST,
  payload: { id, user }
});

export const deleteUser = (id) => ({
  type: DELETE_USER_REQUEST,
  payload: id
});
