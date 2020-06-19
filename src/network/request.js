import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000,
  })

  //请求拦截
  instance.interceptors.request.use(
    config => {
      return config;  //返回配置信息 
    },
    err => {
    }
  )
  //响应拦截
  instance.interceptors.response.use(res => {
    //res.data
    return res.data   //返回响应结果
  },err => {

  })

  //发送真正的网络请求
 return instance(config)
}
