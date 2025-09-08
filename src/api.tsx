import axios from 'axios'


const BASE = import.meta.env.VITE_API_BASE
const TOKEN = import.meta.env.VITE_API_TOKEN


const api = axios.create({
baseURL: BASE,
headers: {
Authorization: `Bearer ${TOKEN}`,
'Content-Type': 'application/json'
},
timeout: 10000
})


export default api