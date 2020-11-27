import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://react-burger-90e40.firebasio.com/'
});

export default instance