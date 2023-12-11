import { defineStore } from 'pinia'
import { getHomeInfoAPI } from '~~/service/home'
import type { HomeInfoDataType } from '~~/service/home'
const homeStore = defineStore('homeStore', {
  state: () => {
    return {
      navbars: [],
      banners: [],
      categorys: []
    }
  },
  actions: {
    async fetchHomeData(type: HomeInfoDataType) {
      const res = await getHomeInfoAPI(type)
      console.log(res.data.value)
    }
  }
})
export default homeStore
