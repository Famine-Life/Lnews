<template>
<div class="MY_list" name="MY_list">
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="grid-content bg-purple">
      </div>
    </el-col>
    <el-col :span="20">
      <div class="grid-content bg-purple"  v-for="(item, index) in MY_result" v-bind:key='index'>
        <li><p>{{item.famous_name}}</p><p>:</p><p>{{item.famous_saying}}</p></li>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
console.log('MY_list')
//名人名言 List
export default {
    name: 'My_list',
    data () {
        return{
          key:'1b6f6a2d14d04c0a928616b4c9e9b242',
          keyword:'鲁迅',

          MY_result:[],
          
        }
    },
    created () {
        this.$ajax({
          type:'get',
          url:'/MY?key='+this.key+'&keyword='+this.keyword
        }).then((Response)=>{
          console.log('MY:',Response)
          // console.log('MY_list ajax')
          this.MY_result = Response.data.result;
          console.log('this.MY_result:',this.MY_result);
        })
    }

}
</script>

<style>
.MY_list{
  overflow-x:hidden;
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    /* background: #99a9bf; */
    background: #a6df66;
  }
  .bg-purple {
    background: #cce9ab;
  }
  .bg-purple-light {
    background: #ddf5c2;
  }
  .grid-content {
    margin-top: 10px;
    text-align: left;
    border-radius: 4px;
    min-height: 36px;
  }
  .grid-content li {
    list-style: none;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    line-height: auto;
    padding:14px;
  }
   .grid-content li p{
     display:table-cell;
   }
   .grid-content li p:first-child{
     width: 40px;
   }
  .row-bg {
    padding: 10px 0;
    background-color: #a6df66;
  }
</style>