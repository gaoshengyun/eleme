<template>
  <div>
    <mt-header fixed class="bgblu">
      <span slot='left'>eleme</span>
      <mt-button slot="right" @click="gologin">登录 | 注册</mt-button>
    </mt-header>
    <div class="padtop40 bgf5">
      <div class="ih50 padlr10 box bgfff">
        <span class="">当前选择城市</span>
        <span class="right fs0-8 col9f">定位不准时,表在城市列表选择</span>
      </div>
      <mt-cell :title="$store.state.currentcity.name" class="col after" to="city" is-link value=""></mt-cell>

      <div class="mgtio10 bgfff">
        <mt-cell class="after" title="热门城市"></mt-cell>
        <div class="itembox ovhid col">
          <div v-for="(item, index) in hotcity" :key="item.id" @click="gocity({name:item.name,id:item.id})">{{item.name}}</div>
        </div>

        <div v-for="(items,index) in citylist" :key="index" class="mgtop10 bgfff">
          <mt-cell class="after" :title="index"></mt-cell>
          <div class="itembox ovhid">
            <div class="nowrap" v-for="item in items" @click="gocity({name:item.name,id:item.id})">{{item.name}}</div>
          </div>        
        </div>  

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      citylist : {},
      hotcity : {},
    }
  },
  created() {
    this.getallcities()
    this.gethotcities()
    this.getcurrentcity()
  },
  methods: {
    getallcities(){ //获取所有城市
      this.axios.get('https://elm.cangdu.org/v1/cities?type=group').then(result => {
        if(result.status === 200){
          this.citylist = result.data
        }
      })
    },
    gethotcities(){ //获取热门城市
      this.axios.get('https://elm.cangdu.org/v1/cities?type=hot').then( result => {
        if(result.status === 200){
          this.hotcity = result.data
        }
      })
    },
    getcurrentcity(){ //获取当前城市
      this.axios.get('https://elm.cangdu.org/v1/cities?type=guess').then(result=>{
        if(result.status === 200){
          this.$store.state.currentcity.name =result.data.name
          this.$store.state.currentcity.id  = result.data.id
        }
      })
    },
    gologin(){  //跳转到登录/注册页面
      this.$router.push('login')
    },
    gocity(e){ //跳转到城市页面
      this.$router.push('city')
      this.$store.state.currentcity = e
    }
  },
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


