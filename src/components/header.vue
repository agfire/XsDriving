<template>
    <div class="header">
    <div class="header_itm img ">
      <img src="../assets/logo.png" >
     </div>
    <div v-for="(itm,index) in headerdata" class="header_itm title" :key="itm">
      <a v-if="index!=1"  :href="links(index)">{{itm}}</a>
      <router-link v-else to="/home">{{itm}}</router-link>
     </div>
     <Title  v-if="state" ></Title>
    </div>

</template>

<script>
 import Title from  './title.vue'
export default {
  name: 'Header',
  data () {
      return {
          headerdata: [
          "长沙星胜驾校",
         
          ],
          ids:['#DrivingSchool','#Coach','#NewCentre','#CoachProcess','#signup','#schooladdress'],
          state:true,
 
      }
  },
  components: {
      Title:Title
  },
  methods: {
     links (index) {
    if(index==0&&index==1){
        return false
      }
     this.link=this.ids[index-2]
     return this.link
     }
  },
 computed: {
  
   
 },
 mounted () {
   
 },
  created () {
   const clientwidth=document.body.clientWidth 
    if(clientwidth>=1400){
    this.headerdata.push("首页")
    this.headerdata.push("企业简介")
    this.headerdata.push("金牌教练")
    this.headerdata.push("新闻中心")
    this.headerdata.push("驾考流程")
    this.headerdata.push("报名")
    this.headerdata.push("驾校位置")
    this.state=false;
    console.log(this.state)
    }
 },

}
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */

.header{
 width: 100%;
background-color: rgba(60, 135, 255, 1);
opacity: 0.9;
 position: fixed;
 z-index: 10
 
}
.img {
  width: 100%;
  background-image: url('../../static/tixing.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.9;
}
.img img{
  margin: 0 auto;
  display: table;
}
.header_itm a{
  display: inline-block;
  text-decoration: none;
  color:#fff;
  
}
.header_itm a:hover{
   border-bottom: red;
}

@-webkit-keyframes textchange{
	0%{transform: scale(0.8);}
	50%{transform: scale(1.1);}
	100%{transform: scale(0.8);}
}

.header_itm:nth-child(2) a{
   -webkit-animation: textchange  6s infinite ease-in-out;
}
</style>
