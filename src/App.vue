<template>
  <div id="app">
       <Header></Header>
       <Transfromimg></Transfromimg>
      <DrivingSchool :Drivingdata="Drivingdata"></DrivingSchool>
        <!--  <div class="introduce">
       <div class="company"><span>企业简介</span></div>
       <Popup :imgnum=jianjie></Popup>
       <Popup :imgnum=imgnum></Popup>
        <Popup :imgnum=jianjie></Popup> !-->
       </div>
    
  </div>
</template>
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
<script>
import Header from './components/header.vue'
import Transfromimg from './components/Transfromimg.vue'
import Popup from './components/Popup'
import DrivingSchool from './components/DrivingSchool.vue'
export default {
  name: 'App',
  components:{ Header,Transfromimg,Popup,DrivingSchool },
  data () {
    return {
      imgnum: [
       
       {
         id:1,
         url:"/static/0.png",
         name:"wg",
         age:"5",
         type:"教练简介",
         speak:"好好学习，天天向上",
         title:"王旭越来越适应灾区的生活，和小玉相处越来越融洽，并发现了村子里几棵老茶树的商机，在鉴定了茶树合格的时候被告知小玉不见了，王旭着急地赶回村里。陈金水想让陈大光一步一个脚印踏实做生意，而陈大光却想卖给杨雪资源被陈金水阻拦，陈大光对陈金水大发雷霆不听劝。莱昂赌博成瘾，邱岩无可奈何。陈江河看出费尔南德的阴谋，并劝说骆玉珠想和杨氏集团连手，而骆玉珠因怀疑陈江河和杨雪的关系不单纯拒绝和杨氏集团合作，并且还和杨雪打价格战，陈江河费力讨好骆玉珠，骆玉珠却不理睬，陈江河背着玉珠见了骆父"
       },
       {
         id:2,
         url:"/static/1.png",
         name:"we",
         age:"5",
         speak:"好好学习，天天向上",
         title:"王旭越来越适应灾区的生活，和小玉相处越来越融洽，并发现了村子里几棵老茶树的商机，在鉴定了茶树合格的时候被告知小玉不见了，王旭着急地赶回村里。陈金水想让陈大光一步一个脚印踏实做生意，而陈大光却想卖给杨雪资源被陈金水阻拦，陈大光对陈金水大发雷霆不听劝。莱昂赌博成瘾，邱岩无可奈何。陈江河看出费尔南德的阴谋，并劝说骆玉珠想和杨氏集团连手，而骆玉珠因怀疑陈江河和杨雪的关系不单纯拒绝和杨氏集团合作，并且还和杨雪打价格战，陈江河费力讨好骆玉珠，骆玉珠却不理睬，陈江河背着玉珠见了骆父"
       },
       {
         id:3,
         url:"/static/0.png"
       },
       {
        id:4,
        url:"/static/1.png"
       },
      
      ],
       Drivingdata:[{
         title:'',
         mark:'',
         doc:"",
         background:""

       }]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$http.get('http://172.24.3.78/sys/company/list').then((res) => {
        console.log("获取的数据"+res)
        this.Drivingdata = res.body
        console.log(this.Drivingdata)
      })
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
    margin-block-start: 1em;
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
;

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
x