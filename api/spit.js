import  request from  '@/utils/request'
const api_name = 'spit';
export default {
  getList(page, size) {
    return request({
      url: `/${api_name}/list/${page}/${size}`,
      method: 'post',
      data: {}
    })
  },
  thumbup(id) {
    return request({
      url: `/${api_name}/thumbup/${id}`,
      method: 'put'
    })
  },
  // submit(content) {
  //   return request({
  //     url: `/${api_name}`,
  //     method: 'post',
  //     data: {
  //       content
  //     }
  //   })
  // },
  submit(content, parentId) {
    return request({
      url: `/${api_name}`,
      method: 'post',
      data: {
        content,
        parentId
      }
    })
  },
  findById(id) {
    return request({
      url: `/${api_name}/${id}`,
      method: 'get'
    })
  },
  commentlist(id, currentPage, pageSize) {
    return request({
      url: `/${api_name}/comment/${id}/${currentPage}/${pageSize}`,
      method: 'get'
    })
  }
}
