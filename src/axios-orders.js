import axios from 'axios';

const instance = axios.create({
    baseURL='https://healthy-recipes-7a5c6-default-rtdb.firebaseio.com/'
});

export default instance;