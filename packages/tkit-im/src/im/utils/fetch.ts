import axios from 'axios'

const fetch = axios.create({
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})

fetch.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

const POST = fetch.post
const GET = fetch.get

export {
    POST,
    GET
}


