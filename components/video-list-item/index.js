// components/video-list-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemInfo: {
      type: Object,
      default: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick: function() {
      wx.navigateTo({
        url: '/pages/detail-video/index?id=' + this.properties.itemInfo.id
      })
    }
  }
})
