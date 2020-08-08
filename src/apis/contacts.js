import axios from 'axios';

export default axios.create({
    baseURL: 'https://jacobus-portfolio-api.herokuapp.com/'
})