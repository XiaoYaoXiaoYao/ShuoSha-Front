import {getUser} from '@/utils/userinfo'
/*
对axios进行封装
 */
import axios from 'axios'
//创建axios实例
const  request = axios.create({
  //api中的base_url
  baseURL: 'http://localhost:8080/xiaoyao',
  //请求的超时时间
  timeout: 30000,
  headers: {
    Authorization: getUser().token || ''
  }
});

export default  request
