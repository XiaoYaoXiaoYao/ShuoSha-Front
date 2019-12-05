//api全称application interface就是接口，前端所说的api，通常指的是JavaScript封装的一些功能(一个个函数)
import request  from  '@/utils/request'

export default {
  getList(currentPage,pageSize,queryPOJO){
    return request({
      //请求活动列表
      //http://localhost:8080/xiaoyao/activity/list/{page}/{size}
      url: `/activity/list/${currentPage}/${pageSize}`,
      method : 'post',
      data : queryPOJO
    });
  },
  findById(id){
    return  request({
      url : `/activity/${id}`,
      method: 'get'


    })


  }



}
