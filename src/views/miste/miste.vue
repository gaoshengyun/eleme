<template>
  <div>
    
    <!-- 头部 -->
    <mt-header fixed class="fs1-2" title="标题标题标题标题标题标题标题标题标题标题标题标题">
      <router-link to="/" slot="left">
        <div class="search2">
          <svg :class="[$store.state.selected=='profile'? 'selectedsvg' : '']" class="svgicon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
      </router-link>
      <mt-button class="fs0-8" slot="right">登录 | 注册</mt-button>
    </mt-header>
    <!-- 头部 -->

    <!-- 中间主体 -->
    <div class="padtop40">
      
      <!-- 分类滑动 -->
      <mt-swipe class="myswipe" :auto="0">
        <mt-swipe-item v-for="(items, index) in category" :key="index">
          <div v-for="(item, index) in items" :key="index" class="eventcate">
            <div class="imgbox"><img :src="imgBaseUrl+item.image_url"></div>
            <div class="fs0-8 col9f mgtop5">{{item.title}}</div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
      <!-- 分类滑动 -->
      <loading v-show="isload"></loading>
      <div class="mgtop10 bgfff maindiv">
        <div class="ih30 pad10">
          <div class="svgbox left">
            <div name="shop" class="shopicon"></div>
          </div>
          <div class="fs0-8 left col9f mgleft10">
            附近商家
          </div>
        </div>

        <div class="shoplist after" v-for="(item, index) in shoplist" :key="item.id">
            <div class="shopimgbox">
                <img :src="'https://elm.cangdu.org/img/'+item.image_path">
            </div>
            <div class="rightbox">
                <div class="shoptop">
                  <span class="pinpai fs10 mgl">品牌</span>
                  <span class="shopname">{{item.name}}</span>
                  <span class="rightspan right fs10 mgr">
                    <span class="" v-for="(itemsupports, index) in item.supports" :key="itemsupports.id">{{itemsupports.icon_name}}</span>
                   </span>
                </div>
                <div class="xxdiv">
                  <div class="xxbox fs10 mgl">
                    <span><em name="xx" class="xx">评分:</em></span>
                  </div>
                  <span class="colred fs10 mgl mgleft8">{{item.rating}}</span>
                  <span class="fs10 mgl">月售{{item.recent_order_num}}单</span>
                  <span class="rightspan fs10 right mgr">
                      <span v-show="item.delivery_mode" class="fn ">{{item.delivery_mode.text}}</span>
                      <span class="zs ">准时达</span>
                  </span>
                </div>
                <div class="shopfoot">
                    <div><span class="fs10 mgl">&yen;{{item.float_minimum_order_amount}} 起送/配送费约&yen;{{item.piecewise_agent_fee.tips}}</span></div>
                    <div><span class="right fs10 mgr"><span class="">{{item.distance}}</span><span class="col">{{item.order_lead_time}}</span></span></div>
                </div>
            </div>
        </div>


      </div>

    </div>
    <!-- 中间主体 -->

    


    <foot></foot>
  </div>
</template>
<script>
import Foot from '../../components/footer/footer'
import Loading from '../../components/loading/loading'
export default {
  data() {
    return {
      category:[], //分类
      imgBaseUrl:'https://fuss10.elemecdn.com', //图片域名地址
      shoplist:[],  //端口列表
      isload:true
    }
  },
  components:{
    Foot,
    Loading
  },
  created() {
    this.getcategory()
    this.getshoplist()
  },
  methods: {
    getcategory(){
      this.axios.get('http://cangdu.org:8001/v2/index_entry').then(result=>{
        // console.log(result)
        if(result.status === 200){
          //this.category = result.data
          //alert(this.category.length)
          let data = result.data
          let num = parseInt(data.length/8)
          let category = []
          let arr = []
          for(let i=0;i<num;i++){
            arr = []
            for(let j=0;j<8;j++){
              arr.push(data[i*8+j])
            }
            category.push(arr)
          }
          arr = []
          if(num*8<data.length){
            for(let i=num*8;i<data.length;i++){
              arr.push(data[num*8+i])
            }
            category.push(arr)
          }
          this.category = category
          // console.log(this.category)
        }
      })
    },
    getshoplist(){  //商品列表
      this.axios.get('http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762').then(result => {
        if(result.status === 200){
          console.log(result.data)
          this.isload = false
          this.shoplist = result.data

        }
      })
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
  fill: #ffffff;
}
.fs10{
  font-size: 12px;
  transform: scale(.8);
  display:inline-block;
}
.mgr{
  transform-origin:100% 50% 0;/*改变缩放基点*/
}
.mgl{
  transform-origin:0 50% 0;/*改变缩放基点*/
}
.myswipe{
  height:210px;
  box-sizing:border-box;
  padding-bottom:30px;
  padding-top:10px;
  background-color:#ffffff;
  border-bottom:1px solid #E4E4E4;
}
.myswipe .mint-swipe-indicators .is-active{
  background-color:#26a2ff;
}

.eventcate{
  width:25%;
  height:50%;
  box-sizing:border-box;
  float:left;
  text-align:center;
}
.imgbox{
  height:60%;
}
.imgbox img{
  height:100%;
}
.shopicon{
  width:100%;
  height:100%;
  margin-bottom:-2px;
}
.svgbox{
  width:15px;
  height:15px;
}
.mgleft10{
  margin-left:10px;
}
.shoplist{
  padding:10px;
  overflow: hidden;
  display:flex;
}
.shoplist>div{
  float:left;
}
.shopimgbox{
  width:60px;
  height:60px;
  margin-right:5px;
}
.shopimgbox>img{
  height:100%;
  width:100%;
  background-color:red;
}
.maindiv{
  border-top:1px solid #E4E4E4;
}

.search2{
  width:20px;
  height:20px;
}
.rightbox{
  font-size:0.8rem;
  flex:1;
}
.shoptop,.xxdiv{
  height:25px;
  line-height:25px;
}
.pinpai{
  display:inline-block;
  width:30px;
  text-align:center;
  font-weight:bold;
  height:20px;
  line-height:20px;
  background-color:#ffd930;
  border-radius:3px;
}
.shopname{
  font-weight:bold;
  font-size:0.8rem;
}
.rightspan>span{
  display:inline-block;
  height:14px;
  border:1px solid #A3ACB7;
  margin-left:3px;
  padding:1px;
  color:#A3ACB7;
  line-height:14px;
  font-size:12px;
}

.xx{
  width:10px;
  height:10px;
  font-style: normal;
}
.xxbox{
  display:inline-block;
  height:25px;
  box-sizing:border-box;
  padding-right: 10px;
}
.xxbox>span{
    margin-right:-2px;
}
.xxspan1{
  position:relative;
  display:inline-block;
}
.xxspan2{
  display:inline-block;
  position:absolute;
  left:0px;
  overflow: hidden;
}
.w1{
  width:10%;
}
.w2{
  width:20%;
}
.w3{
  width:30%;
}
.w4{
  width:40%;
}
.w5{
  width:50%;
}
.w6{
  width:60%;
}
.w7{
  width:70%;
}
.w8{
  width:80%;
}
.w9{
  width:90%;
}
.fn{
  background-color:#3190E8;
  color:white !important;
  border-color:#3190E8 !important;
}
.zs{
  color:#3190E8 !important;
   border-color:#3190E8 !important;
}
.mgleft8{
  margin-left: -8px;
}
.shopfoot>div{
  width:50%;
  float:left;
}
</style>
