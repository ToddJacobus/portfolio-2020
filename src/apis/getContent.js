import axios from 'axios';

export default axios.create({
    baseURL: 'https://cdn.contentful.com/spaces/cfokra459rhp/environments/master/entries' 
})