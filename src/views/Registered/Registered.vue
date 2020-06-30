<template>
<div>
     <Goback/>
	<div class="registered">
		<p><i class="iconfont">&#xe71d;</i><input type="text"  placeholder="用户名"/></p>
		<p><i class="iconfont pswd">&#xe60e;</i><input type="password"  placeholder="密码"/></p>
		<p><i class="iconfont pswd">&#xe60e;</i><input type="password" placeholder="重新输入密码"/></p>
		<p class="code"><input type="text"  placeholder="输入验证码"/></p> 
        <p class="codePic">4512</p>
		<br>
		<el-button type="danger" plain  class='btn2' @click="registered"><span>注册</span></el-button>
	</div>
	 
</div>
</template>
<script>
import Goback from '../../components/Goback/Goback'
import storage from "../../utils/storage";
export default {
 name: 'registered',
 methods:{
	 registered(){
		 console.log(this.res.data);
		 
	 }
 },
  components:{
        Goback
    }

}
</script>
<style lang="less" scoped>
.registered{
	margin-top: 30px;
	input{
    	width: 250px;
		border-color: transparent;
		border-bottom: 2px solid #ccc;
		padding: 10px;
		font-size: 18px;
	}
	   input::-webkit-input-placeholder {
		color: #ccc;
		text-align: left;
     }	
	p{
		box-sizing: border-box;
    	padding: 5px;
	}
	
}
.iconfont{
		color:#ccc;
		font-weight: 900;
		font-size: 18px;
	}
.code{
     text-align: left;
     display: inline-block;
    input{
        width: 150px;
    }
}
.codePic{
	color: white;
    font-size: 18px;
    width: 100px;
    height: 50px;
    line-height: 40px;
    background-color: #ff406f;
    display: inline-block;
}
.btn2{
	color: #ffffff;
    background: #ff406f;
    width: 190px;
    width: 235px;
    border-radius: 50px;
    border: 2px solid #f56c6c;
	margin-top: 110px;
	box-shadow: 5px 5px 5px #f56c6c;
	span{
	font-size: 18px;
	}
}
</style>

