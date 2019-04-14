<template>
  <div>
    <mt-tabbar v-model="$store.state.selected">
      <mt-tab-item id="miste">
        <!-- <img slot="icon"> -->
        <div slot="icon">
          <svg :class="[$store.state.selected=='miste'? 'selectedsvg' : '']" class="svgicon" aria-hidden="true">
            <use xlink:href="#icon-eliaomo"></use>
          </svg>
        </div>
        
        外卖 
      </mt-tab-item>
      <mt-tab-item id="order"> 
        <div slot="icon">
          <svg :class="[$store.state.selected=='order'? 'selectedsvg' : '']" class="svgicon" aria-hidden="true">
            <use xlink:href="#icon-icon-"></use>
          </svg>
        </div>
        订单
      </mt-tab-item>
      <mt-tab-item id="search">
        <div slot="icon">
          <svg class="svgicon" aria-hidden="true" :class="[$store.state.selected=='search'? 'selectedsvg' : '']">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
        搜索
      </mt-tab-item>
      <mt-tab-item id="profile">
        <div slot="icon">
          <svg :class="[$store.state.selected=='profile'? 'selectedsvg' : '']" class="svgicon" aria-hidden="true">
            <use xlink:href="#icon-wode"></use>
          </svg>
        </div>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import '../../common/js/iconfont.js'
export default {
  computed: {
    gopage(){
      return this.$store.state.selected
    }
  },
  watch: {
    gopage(newval,oldval){
      this.$router.push(newval)
    }
  },
}
</script>
<style lang="less" scoped>
.svgicon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.selectedsvg{
  fill: #26a2ff;
}
</style>
