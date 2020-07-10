import axios from 'axios';

export default axios.create({
    // baseURL: 'https://cdn.contentful.com/spaces/cfokra459rhp/environments/master/entries'
    baseURL: 'https://preview.contentful.com/spaces/cfokra459rhp/environments/master/entries' // Preview base URL 
})