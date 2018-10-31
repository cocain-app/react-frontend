import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api";

//structured API requests (e.g. api.songs.search(data).then(searchResult => ...))
export default {
    songs:
        {
            search: header =>
                axios.get(`${API_URL}/search`, {headers: header}).then(res => res.data),
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
                axios.post(`${API_URL}/playlist`, { data }).then(res => res.data),
            put: id => 
                axios.put(`${API_URL}/playlist/${id}`).then(res => res.data),
        },
    auth: 
        {
            login: credentials =>
                axios.post(`${API_URL}/auth`, { credentials }).then(res => res.data),
            register: user =>
                axios.put(`${API_URL}/auth`, { user }).then(res => res.data),    
        }
}