import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api"; //TODO: Add dotenv support (-> webpack config)

//structured API requests (e.g. api.songs.search(data).then(searchResult => ...))
export default {
    songs:
        {
            search: query =>
                axios.get(`${API_URL}/search`, {headers: query}).then(res => res.data),
            get: id =>
                axios.get(`${API_URL}/api/songs/get/${id}`).then(res => res.data),
            transitions: id =>
                axios.get(`${API_URL}/songs/transitions/${id}`).then(res => res.data),
        },
    playlist:
        {
            get: id =>
                axios.get(`${API_URL}/playlist/${id}`).then(res => res.data),
            create: data => 
                axios.post(`${API_URL}/playlist`, {headers: data}).then(res => res.data),
            put: id => 
                axios.put(`${API_URL}/playlist/${id}`).then(res => res.data),
        },
    auth: 
        {
            login: credentials =>
                axios.post(`${API_URL}/auth`, {headers: credentials}).then(res => res.data),
            register: user =>
                axios.put(`${API_URL}/auth`, {headers: user}).then(res => res.data),    
        }
}