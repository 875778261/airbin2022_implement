import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';
class RequestClass {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL, 
            timeout
        });
        this.instance.interceptors.request.use((res)=>{
            return res;
        },(err)=>{
            return err
        });
    }
    request(config) {
        return this.instance.request(...config);
    }
    get(config) {
        return this.instance.request({...config,method:'get'});
    }
    post(config) {
        return this.instance.request({...config,method:'post'});
    }
}
const airbRequest = new RequestClass(BASE_URL, TIMEOUT);
export default airbRequest