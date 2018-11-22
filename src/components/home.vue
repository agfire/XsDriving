<template>
  <div id="home" class="wrapper">
       <DrivingSchool :Drivingdata="Drivingdata"></DrivingSchool>
       <Coach :coachdata="coachdata"></Coach>
       <NewCentre></NewCentre>
        <CoachProcess></CoachProcess>
     <teachvideo :videodata="videodata"></teachvideo>
        <studentSyle></studentSyle>
     <signup></signup>
      <schooladdress></schooladdress>
  </div>
</template>

<script>

import Popup from './Popup'
import DrivingSchool from './DrivingSchool.vue'
import Coach from './Coach.vue'
import NewCentre from './NewCentre.vue'
import CoachProcess from './CoachProcess'
import  Teachvideo  from './Teachvideo'
import studentSyle from './StudentStyle'
import signup from './signup.vue'
import schooladdress from './schooladdress'
export default {
name:'home',
components:{Popup,DrivingSchool,Coach,NewCentre,CoachProcess,Teachvideo,studentSyle,signup,schooladdress},
  props:{},
  data(){
     return {
      imgdata: [],
       Drivingdata:[{
         title:'',
         mark:'',
         doc:"",
         background:""
       }],
       coachdata:[{
        name:"",
        avatar_url:"",
        type:"",
        synopsis:"",
        service:[],
       }
       ],
       videodata:[],
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
    mounted: function () {
    this.$nextTick(function () {
      this.$http.get('http://106.12.80.211:8080/sys/company/list').then((res) => {
        console.log("获取的数据"+res)
        this.Drivingdata = res.body
        console.log(this.Drivingdata)
      })
    })
     this.$nextTick(function () {
      this.$http.get('http://106.12.80.211:8080/coach/FindAllCoach').then((res) => {
        console.log("获取的教练数据"+res)
        this.coachdata = res.body
        console.log(this.coachdata)
      })
    })
     
  },
}
</script>
<style lang="scss" scoped>
.wrapper{}
</style>