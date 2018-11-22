
<template>
    <div id="Coach" class='coach'>
      <Tick :Tickdata="Tickdata"></Tick>
       <div class="coach_content">
           <div class="content_one">
               <img :src='coachdata[number].avatar_url'>
           </div>
            <div class="content_two">
                <p>{{coachdata[number].name}}</p>
              
                <p>{{coachdata[number].type}}</p>
                  <i class="iconfont icon-shuxian  icon-shuxianh" style="transform: rotate(90deg)"></i>
                <p>{{coachdata[number].synopsis}}</p>
            </div>
             <div class="content_three">
                 <div  v-for="(item,index) in coachdata[number].service" :key="index">
                     <span>{{item.exprece}}</span>
                      <div  class="three_list_tiao" :style="widths(item)"></div>
                 </div>
             </div>
       </div>
        <div class="coach_footer" ref="footerlist">
            <div v-for="(item,index) in coachdata.length-num" class="footer"  :class="borderclass(index)" :key="index">
                <img  :alt="index"  style="width: 50%;height: 90%; border-radius: 50% " :src='coachdata[index].avatar_url' @click="bordercolor($event,index)">
            </div>
        </div>
    </div>
</template>

<script>
import Tick from './Tick'
import Vue from 'Vue'
export default {
    name: 'Coach',
    props: {
       coachdata:Array 
    },

    data () {
        return {
            Tickdata:{
            name :'一线教练',
            doc:'One Online Coach'
            },
            number:0,
            num:0,
            border:0,
           /* coachdata:[
                {
                name:"朱归强",
                type:"科目二",
                doc:"热爱学习，天坛上上，大哥，来跟袭来贵来啊快发的广告费",
                imgurl:'../../static/0.png',
                service:[
                 {
                 exprece:"教学经验",
                 ewidth:80
                 },
                {
                 exprece:"教学质量",
                 ewidth:70
                 }, {
                 exprece:"教学服务",
                 ewidth:90
                 }
                ]
                },
                {
                name:"朱大肠",
                type:"科目一",
                doc:"热爱学习，天坛上上，大哥，来跟袭来贵来啊快发的广告费",
                imgurl:'../../static/1.png',
                 service:[
                 {
                 exprece:"教学经验",
                 ewidth:90
                 },
                   {
                 exprece:"教学质量",
                 ewidth:80
                 }, {
                 exprece:"教学服务",
                 ewidth:90
                 }
                ]
                },
                {
                name:"猪猪侠",
                type:"科目三",
                doc:"热爱学习，天坛上上，大哥，来跟袭来贵来啊快发的广告费",
                imgurl:'../../static/3.png',
                 service:[
                 {
                 exprece:"教学经验",
                 ewidth:80
                 },
                   {
                 exprece:"教学质量",
                 ewidth:95
                 }, {
                 exprece:"教学服务",
                 ewidth:91
                 }
                ]
                },
                 {
                
                name:"朱归强",
                type:"科目二",
                doc:"热爱学习，天坛上上，大哥，来跟袭来贵来啊快发的广告费",
                   imgurl:'../../static/1.png',
                 service:[
                 {
                 exprece:"教学经验",
                 ewidth:80
                 },
                   {
                 exprece:"教学质量",
                 ewidth:75,
                 exprece:"教学服务",
                 ewidth:92
                 }
                ]
                },
                {
                 name:"朱大肠",
                 type:"科目三",
                 doc:"热爱学习，天坛上上，大哥，来跟袭来贵来啊快发的广告费",
                imgurl:'../../static/1.png',
                 service:[
                 {
                 exprece:"教学经验",
                 ewidth:80
                 },
                   {
                 exprece:"教学质量",
                 ewidth:85
                 }, {
                 exprece:"教学服务",
                 ewidth:93
                 }
                ]
                },
            ]*/
        }
    },
    components: {Tick},
    methods: {
        widths (item) {
            let style= 'width:'+item.ewidth+'%'
            return  style
        },
        bordercolor(e,index) {
        this.border = index
        console.log(this.border)
        this.number = index
    
        Vue.set(this.number)
        Vue.set(this.coachdata[this.number])
        },
        borderclass(index) {
        return {
        footer_one:index==this.border,
        footer_two:index!=this.border
         }
        }
    },
    computeds: {
      
    },
    created () {
        if(document.body.clientWidth>1400){
            this.num=1
        }
        else if(document.body.clientWidth>=619&&document.body.clientWidth<1400){
            this.num=2
        }
        else {
            this.num=3
        }
        alert(this.num)
    }
}
</script>

<style scoped>
.coach{
    position: relative;
    width: 90%;
    margin:20px auto;
    overflow: hidden;
    background: white;
}

.coach_content{
    margin-top: 5%;
    display: grid;
}
.content_one{
position: relative
}

.content_one img {
border-radius: 50%;
position: absolute;
right: 2%;
}
.icon-shuxian{
    color: deepskyblue;
    position: absolute;
}
 .content_two{
align-self: start;
padding-left: 20px;
position: relative;
}
.coach_footer{
    text-align: center;
}
.footer{
border:1px solid transparent;
border-bottom-color: cornflowerblue;
border-bottom-width:0.2rem;
}
.footer_one {
  border-bottom-color:gold;  
}
.footer_two {
   border-bottom-color:cornflowerblue;  
}
</style>