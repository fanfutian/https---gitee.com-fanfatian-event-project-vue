import request from '@/utils/request'

// 注册接口函数
export const  userRegisterService = (registerData) => {
    const params = new URLSearchParams()
    for (const key in registerData) {
      params.append(key, registerData[key])
    }
    return request.post('/user/register', params)
}