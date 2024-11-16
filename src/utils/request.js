//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';

// 使用element-plus 的提示框
import { ElMessage } from 'element-plus'


//定义一个变量,记录公共的前缀  ,  baseURL
// const baseURL = 'http://localhost:8080/event';
const baseURL = '/event';
const instance = axios.create({baseURL})


//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        // 拦截器
        if(result.data.code=== 0){
            return result.data;
        }
        // 将状态转为失败
        // alert(result.data.message? result.data.message: '服务异常');
        ElMessage.error(result.data.message? result.data.message: '服务异常');
        return Promise.reject(result.data);
    },
    err=>{
        ElMessage.error('服务异常');
        return Promise.reject(err);//异步的状态转化成失败的状态
    }
)

export default instance;