<template>
  <div>
    <mt-header title="天津" class="fs1-2" fixed>
      <mt-button slot="left">
        <mt-button icon="back"></mt-button>
      </mt-button>
    </mt-header>

    <div class="mgtop40 padlr10 bgfff padbot10">
      <input type="text" class="cityinput" placeholder="输入商务楼,学校,地址">
      <div class="submit bgcol ih40">提交</div>
    </div>

    <div class="contenttop fs0-8 padlr10">
      搜索历史
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .cityinput{
    width: 100%;
    height: 40px;
    margin: 10px 0;
    outline: none;
    padding: 0 5px;
    box-sizing: border-box;
  }
  .submit{
    text-align: center;
    color: #fff;
    border-radius: 3px;
  }
  .fs0-8{
    font-size: .8rem;
  }
  .contenttop{
    border-top: 2px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    margin-top: 5px;
  }
</style>
