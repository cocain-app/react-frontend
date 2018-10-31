import axios from 'axios';

//structured API requests (e.g. api.songs.search(data).then(searchResult => ...))
export default {
    songs:
        {
            search: header =>
                axios.get('http://127.0.0.1:8000/api/search', {headers: header}).then(res => res.data),
            get: id =>
                axios.get('http://127.0.0.1:8000/api/songs/get/' + id).then(res => res.data),
            transitions: id =>
                axios.get('http://127.0.0.1:8000/api/songs/transitions/' + id).then(res => res.data),
        },
    playlist:
        {
            get: id =>
                axios.get('http://127.0.0.1:8000/api/playlist/' + id).then(res => res.data),
            create: data => 
                axios.post('http://127.0.0.1:8000/api/playlist', { data }).then(res => res.data),
            put: id => 
                axios.put('http://127.0.0.1:8000/api/playlist/' + id).then(res => res.data),
        },
    auth: 
        {
            login: credentials =>
                axios.post('http://127.0.0.1:8000/api/auth', { credentials }).then(res => res.data),
            register: user =>
                axios.put('http://127.0.0.1:8000/api/auth', { user }).then(res => res.data),    
        }
}