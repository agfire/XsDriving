<template>
  <div  id="schooladdress" class="Saddress">
    <Tick :Tickdata="Tickdata"></Tick>
    <baidu-map  class="bm-view" ak="t5v65uI4OHHELDWqTbQXucWA"  
    :center="center" 
    :zoom="zoom"
     @ready="handler" 
    
     mapType='BMAP_NORMAL_MAP'
     :continuous-zoom='true'
      >
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
       <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
       <bm-scale anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-scale>
      <bm-marker :position="{lng:112.823977, lat: 28.34457}" :dragging="true" @click="infoWindowOpen"></bm-marker>
        <bm-overlay
      pane="labelPane"
      :class="{sample: true, active:true}"
      @draw="draw"
      @mouseover.native="active = true"
      @mouseleave.native="active = false">
      <div>湖南省长沙市望城区星胜驾校</div>
    </bm-overlay>
    </baidu-map>
<div class="footwrapper">
  <div class="Sfooter">
  <div class="left">
    <img src="../../static/weizhixiao.png">
    <span>驾校地址</span>
    <p>湖南省长沙市望城区旺旺中路12号星胜驾校</p>
  </div>
  <div class="center"><img src="../../static/dianhua.png">
  <span>咨询电话</span>
    <p>xx教练：18584669523</p>
    </div>
  <div class="right"><img src="../../static/banquan.png">
   <span>版权所有</span>
    <p>湖南省长沙市星胜驾培有限公司</p>
    <p>www.csxsjx.com</p>
    </div>
   <div class="left">
    <img src="../../static/weizhixiao.png">
    <span>校长信箱</span>
    <p>364049242@qq.com</p>
  </div>
</div>
</div>

  </div>
</template>

<script>
import Tick from './Tick'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import {BmScale,BmNavigation,BmMapType,BmContro,BmMarker,BmInfoWindow,BmOverlay} from 'vue-baidu-map'

export default {
  components:{ Tick,BaiduMap,BmScale,BmNavigation,BmMapType,BmMarker,BmInfoWindow,BmOverlay },
  props:{},
  data(){
    return {
        Tickdata:{
        name :'驾校位置',
        doc:'Dring School location'
        },
        center: {lng: 0, lat: 0},
        zoom: 19,
        infoWindow: {
        show: true,
        contents: '湖南省长沙市望城区星胜驾校.'
      }
    }
  },
  watch:{},
  computed:{},
  methods:{
       draw ({el, BMap, map}) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(112.823977, 28.34447))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
     },
     handler({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 112.823977
      this.center.lat = 28.34447
      this.zoom = 19
    },
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    },
    clear () {
      this.infoWindow.contents = ''
    }
    
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>

</style>