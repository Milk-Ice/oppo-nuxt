import { defineStore } from 'pinia'

const getDetailsStore = defineStore('details', {
  state: () => {
    return {
      detailesInfo: []
    }
  },
  actions: {
    fetchDetailData() {}
  }
})
export default getDetailsStore
