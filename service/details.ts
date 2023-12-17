import myRequest from './index'
import type { IResultData } from './index'
import { IDetails } from '~~/types/details'
export type DetailsInfoDataType = 'oppo' | 'air' | 'watch' | 'tablet'
// 获取商品详情信息
export const getDetailsInfoAPI = (type: DetailsInfoDataType) => {
  return myRequest.get<IResultData<IDetails[]>>('/oppoDetail', {
    type: type || 'oppo'
  })
}
