<template>
    <div class="wrap_img">
  <el-carousel indicator-position="outside">
    <el-carousel-item  v-for="item in imgdata" :key="item" ref=carousel>
      <a href="#">
        <img class="imgclass">
      </a>
    </el-carousel-item>
  </el-carousel>
</div>
</template>
</div>

<script>

export default {
  name: 'transfromimg',
  data () {
      return {
          carouselimg: [],
          imgdata:["/static/0.png",'/static/1.png',"/static/2.png","/static/3.png"],
          
      }
  },
  mounted () {
  this.$nextTick(() => {
       this.ChangeImg()   
   })
  },
  methods: {
    ChangeImg() {
      this.carouselimg = document.querySelectorAll(".el-carousel__item img")
      for(let i=0;i<this.imgdata.length;i++) {
      this.carouselimg[i].setAttribute("src", this.imgdata[i]); 
      
      }
      console.log(this.carouselimg)
    }
  },
  computed : {
  
  }
}
</script>

<style lang="scss">
 .wrap_img {
     position: relative;
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