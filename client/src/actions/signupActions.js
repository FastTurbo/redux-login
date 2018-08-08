import axios from 'axios'

export const userSignupRequest = user => {
    return dispatch => {
        return axios.post('/api/users', user)
    }
}

export const isUserExists = user => {
    return dispatch => {
        return axios.get(`/api/users/${user}`, user)
    }
    
}