<template>
  <div id="CoachProcess" class="CoahProcess">
      <div class="wrapperProcess">
       <div class="Process_list" v-for="(item,index) in Process" :key="index" :style="background(item,index)">
           <div class="Plist_text">
               
               <span  v-if="index!=4&&index!=3&&index!=6&&index!=7" @click="mask(index)">{{item.text}}</span> 
                <span  v-else-if="index!=4" ><a href="https://hn.122.gov.cn/m/login">{{item.text}}</a></span> 
              <!-- <span v-if="item.doc" class="text_doc">{{item.doc}}</span> !-->
           </div>
       </div>
      </div>

        <transition name="slide-fade">
        <div class="mask" v-show="ismask">
            <hr> 
            <span class="mask_title">{{Coach[num].title}}</span>  
           <hr> 
           <span class="mask_doc" style="color: white">{{Coach[num].doc}}</span> 
            <div class="tickfoot" @click="ismask=false">
                <i @click="mask()"></i>
            </div>
        </div>
          </transition>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    ismask:false,
    num:0,
    Coach:[
      {
          title:"星胜驾校报名须知",
          one:"xxxx"
      },
       {
          title:"星胜驾校体检流程",
          one:"xxxx"
      }

    ],
    Process:[
        {
            text:'一 报名缴费',
            url:'./static/0.png'
        },
          {
            text:'二 拍照体检',
            url:'./static/1.png'
        },
          {
            text:'三 在线练题',
            url:'./static/2.png'
        },
          {
            text:'四 理论考试',
            url:'./static/3.png'
        },
          {
            text:'驾考流程',
            url:'./static/jiakao.jpg',
        },
          {
            text:'五 上车培训',
            url:'./static/4.png'
        },
          {
            text:'六 场内考试',
            url:'./static/5.png'
        }, 
         {
            text:'七 路考',
            url:'./static/6.png'
        },
          {
            text:'八 文明安全理论',
            url:'./static/7.png'
        },
          {
            text:'九 领取驾驶证',
            url:'./static/8.png'
        }
    ],
    }
  },
  watch:{},
  computed:{},
  methods:{
     background(item,index) {
         if(index==4) {
             return 
         }
         console.log(item)
         return 'background-image: url('+item.url+')'
     },
     mask(index) {
       
       if(index==0||index==1){
         this.ismask=true
         if(index==1){
             this.num=1
         }
       }
       else {
           return false
       }
     }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>

.wrapperProcess{
    
    margin:  0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(4,1.5fr);
  
}
.Process_list{
background-repeat: no-repeat;
background-size: 100% 100%;
display: flex;
align-items: flex-end;
}
.Plist_text{
background: url('../../static/tixing.png');
background-repeat: no-repeat;
background-size: 100% 100%;
color: rgba(60, 135, 255, 1);
}

.wrapperProcess .Process_list:nth-child(10) {
 grid-area: 4/2/5/3
}
.wrapperProcess .Process_list:nth-child(5) {
background-image: url('../../static/jiakao.png');
justify-content: center;
align-items: center;
}
.wrapperProcess .Process_list:nth-child(5) .Plist_text{
background:transparent;
/*font-size: 38px;
margin-left: 60px;
color: white;
position: relative;
word-spacing: 5px;*/
}
/*.text_doc{
    width:200px;
    color: white;
    font-size: 16px;
    display: inline-block;
    position: absolute;
    top:50%;
    left: 1%;
}*/
a {
    text-decoration: none;
}
.mask{
 position: fixed;
  top:0;
  z-index: 100;
  width: 80%;
  height: 100%;
  overflow: auto;
  background: rgba(7, 17, 27, 0.7);
  transition: all 1s;
  text-align: center;
  left: 10%;
}
.tickfoot{
  position:fixed;
  width: 32px;
  height: 32px;
  font-size: 32px;
  bottom:5%;
  left: 50%;
 
}

.tickfoot i{background: url('../../static/x.png');width: 32px;height: 32px; display: inline-block;}
.mask_title{
color: white;
}
</style>