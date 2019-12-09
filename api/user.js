import request from '@/utils/request'
// const api_group = 'user'
const api_name = 'user'
export default {
  sendsms(mobile) {
    return request({
      url: `/${api_name}/sendsms/${mobile}`,
      method: 'put'
    })
  },
  register(user, code) {
    return request({
      url: `/${api_name}/register/${code}`,
      method: 'post',
      data: user
    })
  },
  login(mobile, password) {
    return request({
      url: `/${api_name}/login`,
      method: 'post',
      data: {
        mobile,
        password
      }
    })
  }

}
