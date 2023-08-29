import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
export const getUsers =() => api.get('/users').then(response => response.data);

export const getUser = (id) => api.get(`/users/${id}`).then(response =>response.data );

export const updateUser = ({id, ...updatedUser}) => api.put(`/users/${id}`).then(response => response.data);