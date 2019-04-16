<template>
  <div id="shop" class="bgfff">
    <div class="topbg">
      <img class="topbgimg" :src="'https://elm.cangdu.org/img/'+shopinfo.image_path" alt="">
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopinfo:{}
    }
  },
  created() {
    this.getshopinfo()
  },
  methods: {
    getshopinfo(){
      this.axios.get('https://elm.cangdu.org/shopping/restaurant/1').then(result => {
        if(result.status === 200){
          console.log(result.data)
          this.shopinfo = result.data
        }
      })
    }
  },
  
}
</script>
<style lang="less" scoped>
.shoptop{
  height:120px;
  background-color: rgba(119,103,137,.43);
  box-sizing:border-box;
  padding:10px 10px 0px 10px;
  position: relative;
}
.topbg{
  position: absolute;
  width:100%;
  height:120px;
  left:0px;
  right:0px;
  overflow:hidden;
}
.topbgimg{
  width:100%;
  filter: blur(10px);
}
.backicon{
  height:30px;
  width:30px;
}
.backicon2{
  height:25px;
  width:25px;
}
.toptop{
  margin-bottom:10px;
}
.topfoot{
  height:70px;
  display:flex;
}
.topleft{
  height:80px;
  width:80px;
  background-color:#3c3c3c;
  margin-right:10px;
  border-radius:3px;
  box-shadow:0 0 5px #3c3c3c;  
}
.topleft>img{
  max-width:100%;
  max-height:100%;
}
.topright,.topleft{
  float:left;
}
.topright{
  height:100%;
  flex:1;
}
.foota{
  height:30px;
  color:white;
  line-height:30px;
  display:flex;
}
.icon3{
  width:20px;
  height:20px;
  margin-top:5px;
}
.footc{
  height:20px;
  line-height:20px;
  font-size:12px;
}
.footb{
  font-size:12px;
  color:white;
}
.footcmain{
  background-color:#0097FF;
  color:white;
  padding:0px 5px; 
}
.shopmid{
  padding:10px 10px 0px 10px;
  margin-bottom:10px;
  border-bottom:2px solid #F8F8F8;
}
.midtop{
  font-size:12px;
}
.te{
  background-color:#F08449;
  padding:0px 1px;
  color:white;
}
.mytab{
  overflow:hidden;
  margin-top:10px;
}
.mytab>div{
  float:left;
  padding-bottom:10px;
  margin-right:10px;
  border-bottom:2px solid white;
}
.mytab>div.on{
  color:#0B89FF;
  border-color:#0B89FF;
}
.leftdiv{
  width:60px;
  padding:0px 10px;
  color:#727272;
  background-color:#F8F8F8;
}
.leftdiv>div{
  padding:15px 0px;
  border-bottom:1px solid #F1F1F1;
}
.leftdiv.on{
  background-color:white;
  color:#080808;
}
.leftdiv.on>div{
  border:0px;
}
.icon5{
  width:15px;
  height:15px;
}
.mianleft{
  width:80px;
  box-sizing:border-box;
  overflow:scroll;
}
#shop{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  height:100vh;
}
.shopmain{
  -webkit-box-flex:1;
  display:-webkit-box;
  overflow:hidden;
}
.mainright{
  -webkit-box-flex:1;
  overflow:scroll;
  padding-left:10px;
}
.foot{
  height:50px;
  line-height:50px;
  background-color:#594C46;
  display:flex;
}
.footleft{
  flex:2;
  display:flex;
}
.footright{
  flex:1;
  text-align:center;
  color:#B7B7B7;
  background-color:#61686A;
}
.footlogo{
  text-align:center;
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#515151;
  margin:0px 10px;
  border:3px solid #444446;
  transform:translatey(-15px)
}
.footicon{
  width:40px;
  height:40px;
  margin-top:7px;
}
.footmain{
  height:50px;
  color:#ADADAD;
  font-size:0.8rem;
}
.itemmain{
  padding-right:10px;
 
}
.iteminfo{
   height:70px;
   display:flex;
   padding:10px 0px;
}
.infoimgbox{
  width:70px;
  height:70px;
  margin-right:5px;
  background-color:red;
}
.infoimgbox>img{
  width:100%;
  height:100%;
}
.inforight{
  flex:1;
}
.ih20{
  height:20px;
  line-height:20px;
}
.ih15{
  height:15px;
  line-height:15px;
}
.addicon{
  width:20px;
  height:20px;
}
.zk{
  background-color:#FF5F15;
  padding:0px 3px;
  color:white;
  border:1px solid #FF5F15;

}
.yh{
  padding:0px 3px;
  color:#FF5F15;
  border:1px solid #FF5F15;
}
</style>
