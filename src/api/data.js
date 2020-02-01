import request from '@/utils/request'

export function getBookList(params) {
  return request({
    url: 'http://localhost:8090/mylibrary/v2/book/'+params.pageSize+'/'+params.currentPage,
    method: 'get',
    params
  })
}

export function getFileList(params) {
  return request({
    url: 'http://localhost:8090/mylibrary/file/'+params.pageSize+'/'+params.currentPage,
    method: 'get',
    params
  })
}
