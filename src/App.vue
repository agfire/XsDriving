<template>
  <div id="app">
       <Header></Header>
        <Transfromimg :imgdata="imgdata"></Transfromimg>
       <router-view></router-view>
        <!--  <div class="introduce">
       <div class="company"><span>企业简介</span></div>
       <Popup :imgnum=jianjie></Popup>
       <Popup :imgnum=imgnum></Popup>
        <Popup :imgnum=jianjie></Popup> !-->
       </div>
</template>

<script>
import Header from './components/header.vue'
import Transfromimg from './components/Transfromimg.vue'
export default {
  name: 'App',
  components:{ Header,Transfromimg},
  data () {
    return {
      imgdata: [],
    }
  },
  mounted: function () {
  this.$http.get('http://106.12.80.211:8080/sys/Broadcast/list').then((res) => {
        console.log("获取的数据图片"+res)
        this.imgdata = res.body
        console.log(this.imgdata)
      })
  },
  created () {
    console.log("设备的宽度为："+document.body.clientWidth)
    
  }
}
</script>

<style lang="scss">

p {
    display: block;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

ul, menu, dir {
    display: block;
    list-style-type: none;
    margin-block-start: 0em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}


/* Small devices (portrait tablets and large phones, 600px and up) */

/* Large devices (laptops/desktops, 992px and up) */


body{
  padding: 0px;
  margin: 0px;
  background-color: rgba(200, 215, 213, 0.19);

}
#app{
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(50px);
  opacity: 0;
}

</style>
