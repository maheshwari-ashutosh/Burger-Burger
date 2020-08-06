import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-burger-49692.firebaseio.com',
});

export default instance;
