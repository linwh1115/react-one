import request from '../../utils/request';

export async function movielist() {
  return request('/api/channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android');
}

