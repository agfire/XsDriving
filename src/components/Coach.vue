<template>
    <div class='coach'>
      <div class="coach_top">
          <i class="iconfont icon-shuxian"></i>
          <span class="top_one"><b>一线教练</b></span></br>
          <span class="top_two">First online Coach</span>
      </div>
       <div class="coach_content">
           <div class="content_one">
               <img src="../../static/1.png">
           </div>
            <div class="content_two">
                <p>朱归强</p>
              
                <p>科目一</p>
                  <i class="iconfont icon-shuxian icon-shuxians" style="transform: rotate(90deg)"></i>
                <p>热爱学习，天坛上上，大哥，来跟袭来贵来啊快发的广告费</p>
            </div>
             <div class="content_three">
                 <div class="three_list"  v-for="(item,index) in coachdata">
                     <span>{{item.name}}</span>
                      <div  class="three_list_tiao" :style="widths(item)"></div>
                 </div>
             </div>
       </div>
        <div class="coach_footer">
            <div class="footer" v-for="(item,index) in num">
                <img  style="width: 60%;height: 90%; border-radius: 50%" src="../../static/1.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Coach',
    data () {
        return {
            num:null,
            coachdata:[
                {
                name:"教学经验",
                width:70,
                },
                {
                name:"教学实训",
                width:80,
                },
                {
                name:"教学服务",
                width:90,
                }
            ]
        }
    },
    methods: {
        widths (item) {
            let style= 'width:'+item.width+'%'
            return  style
        }
    },
    created () {
        if(document.body.clientWidth>1400){
            this.num=5
        }
        else if(document.body.clientWidth>=619&&document.body.clientWidth<1400){
            this.num=4
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
.coach_top{
    margin-left: 1rem;
    margin-top: 1rem;

}
.top_two{
   margin-left: 5%;
   color: gray;
}
.top_one{
     margin-left: 6%;

}
.icon-shuxian{
    color: deepskyblue;
    position: absolute;
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

}
</style>