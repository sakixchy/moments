import axios from "axios";


axios.defaults.baseURL = 'https://drf-api-24-0d97227de030.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;


export const axiosReq = axios.create();
export const axiosRes = axios.create();
