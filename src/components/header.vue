<template>
    <div class="header">
   
    <div class="header_itm img ">
      <img src="../assets/logo.png" >
     </div>
    <div v-for="itm in headerdata" class="header_itm title">
      <a href="#">{{itm}}</a>
     </div>
     <Title  v-if="state" @change="changeclick"></Title>
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
          state:true,

      }
  },
  components: {
      Title:Title
  },
  methods: {
    changeclick () {
    
    }  
  },
  created () {
    const clientwidth=document.body.clientWidth 
    if(clientwidth>=1400){
    this.headerdata.push("首页")
    this.headerdata.push("企业简介")
    this.headerdata.push("驾校简介")
    this.headerdata.push("金牌教练")
    this.headerdata.push("驾校新闻")
    this.headerdata.push("报名")
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
 background-color: rgba(255,255,255,0.62);
 color: white;
 position: absolute;
 z-index: 10
 
}

.header_itm a{
  display: inline-block;
  text-decoration: none;
  color: white;
  
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
