<template>
    <div id='titles' >
       <div class="menu_wrap"  v-on:click.stop="handleclick">
           <img src="../../static/菜单.png"/>
            <transition name="slide-fade">
        <ul   class="menu_list" v-if="state">
            <li v-for='item in headerdata'><a href="#">{{item}}</a></li>
        </ul>
            </transition>
       </div>
       
    </div>
</template>

<script>
export default {
    name: 'titles',
    props: {
        
    },
    data () {
        return {
         activeIndex: '1',
         activeIndex2: '1',
         headerdata: [
          "首页",
          "企业简介",
          "驾校简介",
          "金牌教练",
          "驾校新闻",
          "报名"
         ],
         state:false
        }
    },
    methods: {
      handleclick () {
      this.state=!this.state
     
      }
    }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .5s cubic-bezier(0.9, 0.610, 0.55, 1);
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(5px);
  opacity: 0;
}
#titles{
    width: 75%;
    justify-self:end;

}
.menu_wrap img{
 width: 100%;
 height: 45px;
 position: relative;
}
.menu_wrap ul {
    position: absolute;
    width: 25%;
    height: auto;
    right: 5%;
    top: 77%;
    z-index: 10;
     box-shadow: 0 0 0px 10000px rgba(0,0,0,0.5);
}
.menu_wrap ul li {
    margin-bottom:20px;
    font-size: 16px;
}
.menu_wrap ul li a{
    text-decoration: none;
    color:gray;
    
}
</style>
