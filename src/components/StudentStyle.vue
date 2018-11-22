<template>
  <div  id="StudentStyle" class="Student">
     <Tick  :Tickdata="Tickdata"></Tick>
       <el-carousel  type="card">
    <el-carousel-item v-for="(item,index) in studentimg" :key="index">
      <img class="styudentimg" :src="studentimg[index]">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import Tick from './Tick.vue'
export default {
  components: { Tick:Tick},
  props:{},
  data(){
    return {
        Tickdata:{
        name :'学员风采',
        doc:'Student Style'
        },
        studentimg:['./static/图片 (21).jpg','./static/图片 (32).jpg','./static/图片 (39).jpg']
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.Student{
 width: 90%;
} 
.styudentimg{
      width: 100%;
      height: 95%;
  }
</style>