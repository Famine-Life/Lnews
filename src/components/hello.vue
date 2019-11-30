<template>
  <div id="hello">
    <el-row :gutter="0">
      <el-col  :span="24">
        <div class="block">
          <h2 class="demonstration">新闻头条</h2>
          <el-carousel trigger="click" height="150px" indicator-position="outside">
            <el-carousel-item v-for="item in header_data.data" :key="item.uniquekey">
              <el-col  :span="10" :offset="2">
                <el-image
                style="width: 320px; height: 150px"
                :src="item.thumbnail_pic_s"
                :fit="fit">
                </el-image>
              </el-col>
              <el-col  :span="12">
                <h2 ><a id="header_title_font" :href="item.url" target="_blank">{{item.title}}</a></h2>
              </el-col>
            </el-carousel-item> 
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Lnuews新闻站点',
      key: 'f379aeac65314b25a5554deab778bdb1',
      type: 'top',       //top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
      header_data: [],
      fit: 'contain'
    }
  },
  created() {
    this.$ajax({
      method:'get',
      //url: 'http://api.avatardata.cn/TouTiao/Query?key='+this.key+'&type='+this.type,
      //url: 'TouTiao/Query?key='+this.key+'&type='+this.type
      url:'/api?key='+this.key+'&type='+this.type
    }).then((response)=>{
      this.header_data = response.data.result;
      //console.log(res.data.result)
      console.log("response.data.result.data",response.data.result.data)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

 
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  #header_title_font{
    color:rgb(96, 98, 102);
    cursor:pointer;
    display:block;
    font-family:Avenir, Helvetica, Arial, sans-serif;
    font-size:20px;
    font-weight:500;
    height:19px;
    text-align:center;
    width:308px;
    -webkit-box-direction:normal;
    -webkit-font-smoothing:antialiased;
  }
  #header_title_font:hover{
    color: #409EFF;
  }
</style>

