<template>
    <div>
       <Goback/>
       <div class="bind">
		<p><input type="text"  placeholder="手机号"/></p>
		<p><input type="password"  placeholder="验证码"/></p>
		<br>
		<el-button type="danger" plain  class='btn2' ><span>提交</span></el-button>
	</div>
    </div>
</template>
<script>
import Goback from '../../components/Goback/Goback'
export default {
    name:'binding',
    components:{
        Goback,
    }
}
</script>
<style lang="less" scoped>
.bind{
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