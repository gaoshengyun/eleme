<template>
  <div>
    <mt-header fixed class="bgblu">
      <span slot='left'>eleme</span>
      <mt-button slot="right">登录 | </mt-button>
      <mt-button slot="right">注册</mt-button>
    </mt-header>
    <div class="padtop40 bgf5">
      <div class="ih50 padlr10 box bgfff">
        <span class="">当前选择城市</span>
        <span class="right fs0-8 col9f">定位不准时,表在城市列表选择</span>
      </div>
      <mt-cell title="上海" class="col after" to="" is-link value=""></mt-cell>

      <div class="mgtio10 bgfff">
        <mt-cell class="after" title="热门城市"></mt-cell>
        <div class="itembox ovhid col">
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
          <div>上海</div>
        </div>

        <div class="mptop10 bgfff">
          <mt-cell class="after" title="A"></mt-cell>
          <div class="itembox ovhid">
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
            <div>上海</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .itembox>div{
    width: 25%;
    float: left;
    text-align: center;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    &:nth-child(4n){
      border-right: 0;
    }
  }
</style>


