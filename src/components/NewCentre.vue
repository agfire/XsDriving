<template>
    <div id="NewCentre" class='NewCentre'>
        <Tick :Tickdata="Tickdata" class="tick"></Tick>
         <div class="newcentre_content">
            <div class="newcentre_clist"  v-for="(item, index) in Newsdata" :key="index" >
                <div class="newcentre_cl_left">
                    <p>{{item.month}}</p>
                    <p>{{item.time}}</p>
                </div>
                  <div class="newcentre_cl_right">
                    <div class="clr_top">{{item.testname}}</div>
                    <div class="clr_text">{{item.testdoc}}</div>
                    <router-link to="/newlist"><i class="iconfont icon-back"></i></router-link> 
                  </div>
            </div>
                  <el-pagination
    background
    layout="total,prev, pager, next"
    :total='3'
    :page-size="1"
    :pager-count="5"
    class="pagination"
    >
        </el-pagination>
         </div>

        <!-- <video width="320px" height="320px" src="http://pgqz7lnoz.bkt.clouddn.com/QQ%E7%9F%AD%E8%A7%86%E9%A2%9120181106210241.mp4" controls="controls"></video> !-->
    
    </div>
</template>

<script>
import Tick from './Tick'
export default {
    name: 'NewCentre',
    data () {
        return {
        Tickdata:{
        name :'新闻中心',
        doc:'News Centre'
        },
        Newsdata: [
        {
            month:9,
            time:2018.04,
            testname:'理论考试课程',
            testdoc:'方向盘打死，转向灯作死向右打，然后看到人就撞，看到红灯就要加猛油，这才是开车之道'
        },
         {
            month:9,
            time:2018.04,
            testname:'理论考试课程',
            testdoc:'方向盘打死，转向灯作死向右打，然后看到人就撞，看到红灯就要加猛油，这才是开车之道'
        },
        {
            month:9,
            time:2018.04,
            testname:'理论考试课程',
            testdoc:'方向盘打死，转向灯作死向右打，然后看到人就撞，看到红灯就要加猛油，这才是开车之道'
        },
         {
            month:9,
            time:2018.04,
            testname:'理论考试课程',
            testdoc:'方向盘打死，转向灯作死向右打，然后看到人就撞，看到红灯就要加猛油，这才是开车之道'
        },
        {
            month:9,
            time:2018.04,
            testname:'理论考试课程',
            testdoc:'方向盘打死，转向灯作死向右打，然后看到人就撞，看到红灯就要加猛油，这才是开车之道'
        },
         {
            month:9,
            time:2018.04,
            testname:'理论考试课程',
            testdoc:'方向盘打死，转向灯作死向右打，然后看到人就撞，看到红灯就要加猛油，这才是开车之道'
        },
        ],
          
        
        }
    },
    components: {
        Tick:Tick
    },
    created () {
        
    }
}
</script>

<style scoped>
 .NewCentre{
  width: 90%;
  margin: 0% auto;

 }
 .tick{
 width: 100%;
 margin-left: 1rem;
 }
 .newcentre_content{
     width:100%;
     display: grid;
     grid-template-columns: 1fr 1fr;
   
    
 }
 .newcentre_clist{
     background-color: white;
     display: table
 }

 .newcentre_cl_left{

  background-color: rgba(60, 135, 255, 1);
  text-align: center;
  color: white;
  position: relative;
 }
 
 .newcentre_cl_left p:nth-child(2) {
     font-size: 15px;
 }
 .newcentre_cl_right{
    display: table-cell;
     vertical-align: middle;
     position: relative;
    display: inline-table;
  
 }

.icon-back{
position:absolute;
transform: rotate(180deg);
color: gray;
cursor: pointer;
}
.pagination{
    grid-area: 4/1/5/3
}
</style>