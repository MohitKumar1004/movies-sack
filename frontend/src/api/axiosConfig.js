import axios from 'axios'

export default axios.create({
    baseURL: 'https://movies-sack-1.onrender.com/',
    headers: {"ngrok-skip-browser-warning": "true"}
})