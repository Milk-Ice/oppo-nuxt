import { defineStore } from 'pinia'
import { getHomeInfoAPI } from '~~/service/home'
import type { HomeInfoDataType } from '~~/service/home'
import { IHomeInfo } from '~~/types/home'
const homeStore = defineStore('homeStore', {
  state: (): IHomeInfo => {
    return {
      navbars: [],
      banners: [],
      categorys: []
    }
  },
  actions: {
    async fetchHomeData(type: HomeInfoDataType) {
      const { data } = await getHomeInfoAPI(type)
      // console.log(res.data.value)
      this.navbars = data.value?.data.navbars || []
      this.banners = data.value?.data.banners || []
      this.categorys = data.value?.data.categorys || []
    }
  }
})
export default homeStore
