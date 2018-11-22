<template>
    <div  class="Tick">
        <div class="coach_top">
          <i class="iconfont  icon-shuxian icon-shuxians"></i>
          <span class="top_one"><b>{{Tickdata.name}}</b></span>
          <p class="top_two">{{Tickdata.doc}}</p>
      </div>
    </div>
</template>

<script>

export default {
    name:'Tick',
    props: {
        Tickdata:{
            type:Object
        }
        
    },
    data () {
        return {
        }
    },
  
}
</script>

<style scoped>
.coach_top{
    position: relative;
    margin-left: 1rem;
    margin-top: 1rem;
}
.icon-shuxians{
    color: deepskyblue;
    position: absolute;
}

</style>