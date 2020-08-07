<template>
	<div>
		<div class="wz">充值哆币</div>
		<div class="yu">
			<div>我的余额</div>
			<div>0哆币&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;0哆劵</div>
		</div>
		<div class="ee">
			<div>请选择充值金额<br>哆币充值(1元=90哆币)</div>
			<div><a>充值卡激活</a></div>
		</div>
		<div class="liu">
			<div class="liuu">
				<h1>6元</h1>
				<p>540哆币+<a style="color: red;">100哆劵</a></p>
			</div>
			<div class="liuu2">
				<h1>30元</h1>
				<p>2700哆币+<a style="color: red;">500哆劵</a></p>
			</div>
		</div>
		<div class="liu2">
			<div class="liuu3">
				<h1>60元</h1>
				<p>5400哆币+<a style="color: red;">1000哆劵</a></p>
			</div>
			<div class="liuu4">
				<h1>100元</h1>
				<p>9000哆币+<a style="color: red;">1300哆劵</a></p>
			</div>
		</div>
		<div class="liu3">
			<div class="liuu5">
				<h1>200元</h1>
				<p>18000哆币+<a style="color: red;">2000哆劵</a></p>
			</div>
			<div class="liuu6">
				<h1>500元</h1>
				<p>54000哆币+<a style="color: red;">5000哆劵</a></p>
			</div>
		</div>
		<div class="hui">
			<ul>
				<li><img src="../../../public/img/yuan.png"></li>
			</ul>
			<ul>
				<li><img src="../../../public/img/yuan2.png"></li>
			</ul>
			<ul>
				<li><img src="../../../public/img/yuan3.png"></li>
			</ul>
			<ul>
				<li><img src="../../../public/img/yuan4.png"></li>
			</ul>
		</div>
		<div class="ti">
			<h3>温馨提示</h3>
			<a>如提示支付失败<br>请关注公众号或联系客服进行充值<br>在线客服每天还会和你分享精彩作品哦</a>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.ti a{
		line-height: 30px;
	}
	.ti{
		margin-top: 60px;
		text-align: center;
	}
	.hui ul li{
		list-style: none;
		margin-top: 30px;
	}
	.hui ul{
		margin-left: 40px;
	}
	.liu3{
		display: flex;
		margin-top: 35px;
	}
	.liuu5{
		text-align: center;
		width: 220px;
		height: 130px;
		border: 1px solid #E8E8E8;
		margin-left: 35px;
	}
	.liuu6{
		text-align: center;
		width: 220px;
		height: 130px;
		margin-left: 35px;
		border: 1px solid #E8E8E8;
	}
	.liu{
		display: flex;
	}
	.liuu{
		text-align: center;
		width: 220px;
		height: 130px;
		border: 1px solid #E8E8E8;
		margin-left: 35px;
	}
	.liuu2{
		text-align: center;
		width: 220px;
		height: 130px;
		margin-left: 35px;
		border: 1px solid #E8E8E8;
	}
	.liu2{
		display: flex;
		margin-top: 35px;
	}
	.liuu3{
		text-align: center;
		width: 220px;
		height: 130px;
		border: 1px solid #E8E8E8;
		margin-left: 35px;
	}
	.liuu4{
		text-align: center;
		width: 220px;
		height: 130px;
		margin-left: 35px;
		border: 1px solid #E8E8E8;
	}
	.ee div:nth-of-type(1){
		flex: 2;
		font-size: 18px;
		padding: 25px;
	}
	.ee div:nth-of-type(2){
		flex: 1;
		padding: 35px;
	}
	.ee div:nth-of-type(2) a{
		font-size: 18px;
		background: #006b0d;
		padding: 5px 10px;
		color: white;
	}
	.ee{;
		display: flex;
	}
	.yu div:nth-of-type(1){
		flex: 2;
		font-size: 20px;
		padding: 25px;
	}
	.yu div:nth-of-type(2){
		flex: 1;
		font-size: 20px;
		color: red;
		padding: 25px;
	}
	.yu{
		width: 100%;
		height: 80px;
		background: #eeeeee;
		margin-top: 20px;
		display: flex;
	}
	.wz{
		font-size: 24px;
		text-align: center;
		margin-top: 15px;
	}
</style>
