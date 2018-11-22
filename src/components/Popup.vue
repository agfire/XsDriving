<template>
    <div class="Popup">
     
         <div v-for="(i,index) in imgnum" class=Popup_itm :key="index"><img  v-on:click.stop="mask($event)" :alt=index  :src="i.url" ></div>
            <div class="masks" v-if="isActive"></div>
            <transition name="slide-fade">
            <div class="content" v-show="iscontent">
               <i class="icon iconfont icon-x icon-fix" v-on:click="close"></i>
                <div class="content-top">
                     <img class="content_img" ref="img" >
                       <div class="content-top_left">
                         <ul v-if="isshow">
                         <li>姓名：<span>{{name}}</span></li>
                         <li>执教年龄：<span>{{age}}</span></li>
                         <li>驾培宣言：<span>{{speak}}</span></li>
                         </ul>
                       </div>
                </div>
                <div class="content-btom">
                    <span>{{type}}</span>
                    <div class="content-btom_speack">
                        <p>{{title}}</p>
                    </div>
                </div>
            </div>
            </transition>
    </div>
   
</template>
<script>

export default {
  name: 'Popup',
   props: {
     imgnum:{
      type:Array
     }
   },
   data () {
       return {
           isActive:false,
           iscontent:false,
           alt:null,
           name:"",
           age:"",
           speak:"",
           title:"",
           type:""
       }
   },
  mounted () {
  this.$nextTick(() => {
      
   })
  },
  methods: {
  mask(event){
    console.log(this.imgnum)
     this.isActive = !this.isActive
     this.iscontent = !this.iscontent
     this.alt=event.target.alt
     console.log(this.alt)
     this.contentimg=this.$refs.img
     this.contentimg.setAttribute("src",this.imgnum[event.target.alt].url)
     this.name=this.imgnum[event.target.alt].name;
     this.speak=this.imgnum[event.target.alt].speak;
     this.age=this.imgnum[event.target.alt].age;
     this.title=this.imgnum[event.target.alt].title;
     this.type=this.imgnum[event.target.alt].type;
     console.log(this.contentimg )
  },
  close(){
     this.isActive = !this.isActive
     this.iscontent = !this.iscontent
  }

},
computed:  {
    isshow:function() {
        if(this.imgnum[0].type=="教练简介"){
            console.log("you")
            return true;
        }
        else {
            return false
        }
    }
   /* names:function(){
    console.log("computed")
    return this.name=this.imgnum[this.alt].name;
    },*/
}
}
</script>

<style lang="scss">

 .Popup {
     display: grid;
     grid-auto-flow:column;
     grid-template-rows: 100px 100px;
     position: relative;
     grid-row-gap:20px;
 }
.Popup_itm{
    margin-left: 2%;
    
}
 .Popup .Popup_itm img {
     width: 100px;
     height: 100px;
     border-radius: 50px;

 }

.Popup .Popup_itm{
  
   text-align: center
}

.masks{
  position: fixed;
  box-shadow: 0 0 0px 10000px rgba(0,0,0,0.5);
  z-index: 10;

}
.icon-fix{margin-left: 95%;font-size: 24PX;}
.content{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background:white;
  z-index: 15;
  border-radius: 10px;
}
.content_img{
    width: 200px;
    height: 200px;
    margin-left: 5%;
  
}
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
.content-top{
    display: grid;
    grid-template-columns: repeat(2,50%);
    grid-template-rows: 200px;
}
.content-top ul {
    
    height: 100%;
    margin-block-start: 0px;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}
.content-top ul li {
    height: 65px;
    line-height: 65px;
}
.content-btom {
    width: 100%;
    height: auto;
    margin-top: 12%;
}
.content-btom span {
    display: table;
    margin: 0 auto;
    font-family: "微软雅黑";
    font-size: 24px;
}
.content-btom_speack{
    display: inline-block;
    width: 80%;
    margin-left: 10%;
    text-indent: 12px;
    line-height: 30px;
    letter-spacing: 2px;
}
</style>
