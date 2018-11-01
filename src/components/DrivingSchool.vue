<template>
    <div id='DrivingSchool' v-if="Drivingdata[num].title">
        <div class="DrivingSchool_left">
            <img :src="Drivingdata[num].background" style="width: 100%;height: 100%;">
        </div>
        <div class="DrivingSchool_right">
            <div class="DrivingSchool_right_top">
                    <p>{{Drivingdata[num].title}}<br><span>{{Drivingdata[num].mark}}</span></p> 
            </div>
           <div class="DrivingSchool_right_bottom">
               <div class="DrivingSchool_right_bottom_content">
                    <span>{{Drivingdata[num].doc}}</span><i  class="el-icon-d-arrow-right" @click="mask()"></i>
               </div>
                <ul style="list-style: none">
                    <li>  <i class="  el-icon-minus" :class="{icon:iconactive}"   @click="change(0)"></i></li>
                    <li>  <i class="  el-icon-minus" :class="{icon:!iconactive}" @click="change(1)"></i></li>
                </ul>    
            </div>
        </div>
        <transition name="slide-fade">
        <div class="mask" v-show="ismask">
            <span class="mask_title">{{Drivingdata[num].title}}</span>
            <div class="tickfoot" @click="detailshow=false">
                <i @click="mask()"></i>
            </div>
        </div>
          </transition>
    </div>
</template>

<script>
export default {
    name: 'name',
    props: {
        Drivingdata: {
            type:Array
        }
    },
    data () {
        return {
            iconactive:true,
            num:0,
            ismask:false,

        }
    },
    methods: {
        change (nums) {
            this.iconactive=!this.iconactive
          
            this.num= nums
            console.log(nums)
        },
        mask () {
           this.ismask = !this.ismask
        },
        
},
created () {
    
}
}
</script>

<style scoped>
#DrivingSchool {
    width: 80%;
    display: table;
    margin: 0 auto;
    position: relative;
}
.DrivingSchool_left{
 width: 75%;
 background-color: gold;
}
.DrivingSchool_right{
    width: 60%;
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    margin-right: 20px;
}
.DrivingSchool_right_top p{
    color: black;
   
    margin-left: 10%;
}
.DrivingSchool_right_top span{

 color: gray;
}
.el-icon-caret-right{
    right: 0px;
}
.DrivingSchool_right_bottom {
position: relative;
height: 75%;
}
.DrivingSchool_right_bottom ul {
position: absolute;
transform: translateX(-60%)
}
.DrivingSchool_right_bottom li{
display:  inline-block;
}
.icon{
    color: deepskyblue;
}
.DrivingSchool_right_bottom_content{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    position: relative;
}
.DrivingSchool_right_bottom_content span {
    color: gray;
}
.el-icon-d-arrow-right{
 position: absolute;
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
}
.tickfoot{
  position: relative;
  width: 32px;
  height: 32px;
  font-size: 32px;
  transform: translateX(-50%);
  right: -90%;
}
.tickfoot i{background: url('../../static/x.png');width: 32px;height: 32px; display: inline-block;}
.mask_title{
color: white;
font-size: 25px;
}
</style>