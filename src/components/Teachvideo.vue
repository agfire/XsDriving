<template>
  <div  id="Teachvideo" class="Teachvideo">
    <Tick :Tickdata='Tickdata'></Tick>
    <div class="videowrapper">
        <div  v-for="(item, index) in 6" :key="index" class="videoitem" style="position: relative;"> 
          <div class="playimg"></div>
          <video   poster="../assets/logo.png" class="video" src="http://pgqz7lnoz.bkt.clouddn.com/QQ%E7%9F%AD%E8%A7%86%E9%A2%9120181106210241.mp4" @mousemove="play($event)" @mouseout="disapper($event)">
          </video>
          </div>
    </div>
        <el-pagination
    background
    layout="total,prev, pager, next"
    :total='videodata.num'
    :page-size="1"
    :pager-count="5"
    class="pagination"
    >
        </el-pagination>
  </div>
</template>

<script>
 import Tick from './Tick.vue'
export default {
  components:{Tick},
  data(){
    return {
        Tickdata:{
        name :'教学视频',
        doc:'Teaching Video',
   
        },
        plays:true,
        videodata:{
        num:5,
        url:["http://pgqz7lnoz.bkt.clouddn.com/QQ%E7%9F%AD%E8%A7%86%E9%A2%9120181106210241.mp4","http://pgqz7lnoz.bkt.clouddn.com/QQ%E7%9F%AD%E8%A7%86%E9%A2%9120181106210241.mp4","http://pgqz7lnoz.bkt.clouddn.com/QQ%E7%9F%AD%E8%A7%86%E9%A2%9120181106210241.mp4"]
       }
    }
  },
  watch:{},
  computed:{},
  methods:{
   play(e) {
  
   e.target.controls=true
   e.currentTarget.previousElementSibling.style.display = 'none'
   
   },
   disapper(e){
    e.target.controls=false
   e.currentTarget.previousElementSibling.style.display = 'block'
   }

  },
  created(){},
  mounted(){
        this.$nextTick(function () {
      this.$http.get('http://172.24.3.78:8080/video/list?pagenum=1').then((res) => {
        console.log("获取的视频数据"+res)
        this.videodata = res.body
        console.log(this.videodata)
      })


    })
  }
}
</script>
<style lang="scss" scoped>

.playimg{
  position:absolute;
  background-color: transparent;
  background-image: url('../assets/bofang.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
 
}
video {
  width: 100%;
  min-height: 100%;
}
</style>