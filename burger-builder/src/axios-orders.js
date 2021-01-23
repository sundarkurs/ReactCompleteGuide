import axios from 'axios';

const instance = axios.create(
    {
        baseURL: "https://burger-builder-bcf4b-default-rtdb.firebaseio.com/"
    }
);

export default instance;