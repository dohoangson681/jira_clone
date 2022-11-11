import { URL_JIRA , ACCESS_TOKEN , TOKEN_JIRA } from "../ulti/setting";
import axios from 'axios' ; 
export const http = axios.create({
    baseURL: URL_JIRA,
    timeout: 3000
  });
axios.interceptors.request.use(config => {
    // Do something before request is sent
    config.headers = {
        ...config.headers , 
        'TokenCybersoft ' : ACCESS_TOKEN , 
        'Authorization ' : 'Bearer' + JSON.parse(localStorage.getItem(TOKEN_JIRA)) 
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });