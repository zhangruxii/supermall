import {request} from './request'

export function getHomeMltidata() {
  return request({
    url:'/home/multidata'
  })
}