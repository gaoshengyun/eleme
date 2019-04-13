<template>
  <div>
    <mt-header :title="$store.state.currentcity.name" class="fs1-2" fixed>
      <mt-button slot="left">
        <mt-button icon="back"></mt-button>
      </mt-button>
      <mt-button slot="right" class="fs0-8">切换城市</mt-button>
    </mt-header>

    <div class="mgtop40 padlr10 bgfff padbot10">
      <input type="text" v-model="inputval" class="cityinput" placeholder="输入商务楼,学校,地址">
      <div class="submit bgcol ih40" @click="searchcity">提交</div>
    </div>

   <div class="main">

      <div class="his after" v-show="list.length==0">
        <div class='maintop fs0-8 padlr10'>搜索历史</div>
        <div class="mainbody bgfff ">
          <div class="pad10 after hisitem">
              <div class="ih30">南开区公园</div>
              <div class="ih30 fs0-8 col9f">天津市南开区金马路112号</div>
          </div>
          <div class="pad10 after hisitem">
              <div class="ih30">南开区公园</div>
              <div class="ih30 fs0-8 col9f">天津市南开区金马路112号</div>
          </div>
          <div class="clearall ih30 pad10 col9f">
              清空所有
          </div>
        </div>
      </div>

      <div class='search bgfff his' v-show="list.length!== 0"> 
          <div class="pad10 after hisitem" v-for="(item, index) in list" :key="index">
              <div class="ih30">{{item.name}}</div>
              <div class="ih30 fs0-8 col9f">{{item.address}}</div>
          </div>
          
      </div>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[],
      inputval:''
    }
  },
  methods: {
    searchcity(){
      alert(this.inputval)
      this.axios.get(`https://elm.cangdu.org/v1/pois?city_id=${this.$store.state.currentcity.id}&keyword=${this.inputval}&type=search`).then(result=>{
         if(result.status === 200){
          //console.log(result.data)
          this.list = result.data
         }
      })
    }
  },
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
    border: 1px solid #e4e4e4;
    color: #333;
  }
  .submit{
    text-align: center;
    color: #fff;
    border-radius: 3px;
  }
  
  .main{
    border-top: 2px solid #e4e4e4;
    .mainbody{
      border-bottom: 2px solid #e4e4e4;
    }
    .clearall{
      text-align: center;
    }
    .his{
      .hisitem{
        margin: 0 auto;
        padding-top: 0.65rem;
        border-bottom: 1px solid #e4e4e4;
        .ih30,.search{
          margin: 0 auto 0.35rem;
          width: 90%;
          font-size: 0.9rem;
          color: #333;
          &.fs0-8{
            font-size: 0.45rem;
            width: 90%;
            margin: 0 auto 0.55rem;
            color: #999;
          }
        }
      }
    }
  }
</style>
