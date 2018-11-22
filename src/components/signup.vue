<template>
  <div  id="signup" class="signup">
   <div class="wrappersign">
       <Tick :tickdata="Tickdata"></Tick>
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm elform">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入姓名" class="input"></el-input>
  </el-form-item>
  <el-form-item label="驾考车型" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择驾考类型">
      <el-option label="C1" value="C1"></el-option>
      <el-option label="C2" value="C2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="手机号码" prop="desc">
    <el-input type="number" v-model="ruleForm.desc"  maxlength="11" placeholder="请输入电话号码" class="input"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即报名</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
   </div>
  </div>
</template>

<script>
import Tick from './Tick.vue'
import Vue from 'vue'
export default {
  components:{Tick:Tick},
  props:{},
  data(){
     var checkphone =(rule, value, callback) =>{
         if(!/^1[6|3|4|5|7|8][0-9]{9}$/.test(value)){
              callback(new Error('请输入正确的手机格式号码'));
         }
         else if(value==""){
             callback(new Error('请输入手机号'));
         }
         else {
             callback();
         }
     }
    return {
        Tickdata:{
        name :'立即报名',
        doc:'Sign up'
        },
       ruleForm: {
          name: '',
          region: '',
          desc: ''
        },
        name:"",
        number:"",
        type:"",
        rules: {
         name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择驾考类型', trigger: 'change' }
          ],
         
          desc: [
            {required: true, validator: checkphone,  trigger: 'blur' }
          ]
          }
    }
  },
  watch:{},
  computed:{},
  methods:{
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
        console.log( this.ruleForm.name,
              this.ruleForm.region,
              this.ruleForm.desc)
          if (valid) {
            alert('提交成功，稍后会有工作人员与您联系');
             Vue.http.post("http://172.24.3.123:8080/registration/AddRegistration",{
              name:this.ruleForm.name,
              type:this.ruleForm.region,
              number:this.ruleForm.desc
             },).then((data)=>{
               console.log(data)
             },(error=>{

                console.log(error)
             }))

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>

</style>