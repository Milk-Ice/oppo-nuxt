import myRequest from './index'
import type { IResultData } from './index'
export type HomeInfoDataType = 'oppo' | '"onePlus' | 'intelligent'
// 获取首页信息
export const getHomeInfoAPI = (type: HomeInfoDataType) => {
  return myRequest.get<IResultData<any>>('/home/info', {
    type: type || 'oppo'
  })
}
