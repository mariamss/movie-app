import axios  from 'axios';

const request = axios.create({ baseURL: "https://imdb-api.com/en/API/" });

export default request;