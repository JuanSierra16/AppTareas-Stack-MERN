import axios from 'axios'

export const createUserRequest = async(user) =>
    await axios.post('http://localhost:4000/users', user)

export const getUserRequest = async(email) =>
    await axios.get(`http://localhost:4000/users/${email}`)