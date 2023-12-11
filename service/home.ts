import { IHomeInfo } from '~~/types/home'
import myRequest from './index'
import type { IResultData } from './index'
export type HomeInfoDataType = 'oppo' | '"onePlus' | 'intelligent'
// 获取首页信息
export const getHomeInfoAPI = (type: HomeInfoDataType) => {
  return myRequest.get<IResultData<IHomeInfo>>('/home/info', {
    type: type || 'oppo'
  })
}
