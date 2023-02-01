import axios from 'axios';
URL = process.env.REACT_APP_URL

export default axios.create({
    baseURL: URL,
});