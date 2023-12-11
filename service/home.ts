import myRequest from './index'
import type { IResultData } from './index'
type HomeInfoData = 'oppo' | '"onePlus' | 'intelligent'
// 获取首页信息
export const getHomeInfoAPI = (type: HomeInfoData) => {
  return myRequest.get<IResultData<any>>('/home/info', {
    type: type || 'oppo'
  })
}
