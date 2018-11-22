<template>
    <div class="wrap_img">
  <el-carousel indicator-position="outside">
    <el-carousel-item  v-for="(item,index) in imgdata" :key="index" ref=carousel>
      <a href="#">
        <img class="imgclass" :src="imgdata[index].url">
      </a>
    </el-carousel-item>
  </el-carousel>
</div>
</template>
</div>

<script>

export default {
  name: 'transfromimg',
  props: {
  imgdata :{
    type:Array
  }
  },
  data () {
      return {
          carouselimg: [],
       
          
      }
  },
  mounted () {
  this.$nextTick(() => {
   
   })
  },
  methods: {
  
  },
  computed : {
  
  }
}
</script>

<style lang="scss">
 .wrap_img {
     width: 100%;
   
 }
.el-carousel__item a {
  display: block;
  width: 100%;
}
 .imgclass{
    display: inline-block;
    width:100%;
    
}
.el-carousel {
  width: 100%;

}


</style>