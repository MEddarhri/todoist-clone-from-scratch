import axios from 'axios';

const API = axios.create({
  baseURL: 'https://todoist-api.vercel.app',
});

export default API;
