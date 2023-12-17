import myRequest from './index'
import type { IResultData } from './index'
import { IDetails, IDetailsProductType } from '~~/types/details'
// 获取商品详情信息
export const getDetailsInfoAPI = (type: IDetailsProductType) => {
  return myRequest.get<IResultData<IDetails[]>>('/oppoDetail', {
    type: type || 'oppo'
  })
}
