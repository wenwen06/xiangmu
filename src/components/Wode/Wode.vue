<template>
	<div>
			<div class="tbu">
				<img src="../../../public/img/toux.png" />
				<div class="hot_swtich">
					<router-link tag="div" to="/" class="hot_item active">登录</router-link>
					<router-link tag="div" to="/" class="hot_item active">注册</router-link>
				</div>
				<div class="juan">
					<div>
						<h1>0</h1><p>哆币</p>
					</div>
					<div>
						<h1>0</h1><p>哆劵</p>
					</div>
				</div>
				<div class="duo">
					<div>
						<router-link tag="div" to="/Chongz" class="sjh">
						<div>
							<img src="../../../public/img/chongz.png"  />
						</div>
						<div>
							<a>哆币充值</a>
						</div>
						<div>
							<a>充就送</a>
						</div>
						</router-link>
					</div>
					<div class="sjh2">
						<div>
							<img src="../../../public/img/VIP.png"  />
						</div>
						<div>
							<a>我的VIP</a>
						</div>
						<div>
							<a>></a>
						</div>
					</div>
					<div class="sjh2">
						<div>
							<img src="../../../public/img/lius.png"  />
						</div>
						<div>
							<a>流水记录</a>
						</div>
						<div>
							<a>></a>
						</div>
					</div>
					<div class="heng"></div>
					<div class="sjh2">
						<div>
							<img src="../../../public/img/shuj.png"  />
						</div>
						<div>
							<a>我的书架</a>
						</div>
						<div>
							<a>></a>
						</div>
					</div>
					<div class="sjh2">
						<div>
							<img src="../../../public/img/lis.png"  />
						</div>
						<div>
							<a>阅读记录</a>
						</div>
						<div>
							<a>></a>
						</div>
					</div>
					<div class="sjh2">
						<div>
							<img src="../../../public/img/yij.png"  />
						</div>
						<div>
							<a>意见反馈</a>
						</div>
						<div>
							<a>></a>
						</div>
					</div>
					<div>
						<router-link tag="div" to="/Lianx" class="sjh4">
						<div class="img">
							<img src="../../../public/img/lianx.png"  />
						</div>
						<div>
							<a>联系客服</a>
						</div>
						<div>
							<a>></a>
						</div>
						</router-link>
					</div>
					<div class="sjh2">
						<div>
							<img src="../../../public/img/tuic.png"  />
						</div>
						<div>
							<a>退出账号</a>
						</div>
						<div>
							<a>></a>
						</div>
					</div>
					<div class="heng2"></div>
				</div>
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
	</div>
</template>

<script>
	
</script>

<style>
	.sjh4{
		display: flex;
	}
	.sjh4 div{
		margin-top: 30px;	
		height: 40px;
		
	}
	.sjh4 div:nth-of-type(1){
		flex: 1;
		margin-left: 10px;
		transform: scale(1.1);
	}
	.sjh4 div:nth-of-type(2){
		flex: 4;
		margin-left: -40px;
		font-size: 20px;
	}
	.sjh4 div:nth-of-type(3){
		flex: 1;
	}
	.sjh4 div:nth-of-type(3) a{
		font-size: 30px;
		margin-left: 20px;
	}
	.img img{
		transform: scale(0.4);
		margin-left: -25px;
		margin-top: -22px;
	}
	.heng{
		width: 95%;
		height: 4px;
		background: #e2e2e2;
	}
	.heng2{
		width: 95%;
		height: 4px;
		background: #e2e2e2;
		margin-top: 90px;
	}
	.sjh2{
		display: flex;
	}
	.sjh2 div{
		margin-top: 30px;	
		height: 40px;
		
	}
	.sjh2 div:nth-of-type(1){
		flex: 1;
		margin-left: 10px;
		transform: scale(1.1);
	}
	.sjh2 div:nth-of-type(2){
		flex: 4;
		margin-left: -40px;
		font-size: 20px;
	}
	.sjh2 div:nth-of-type(3){
		flex: 1;
	}
	.sjh2 div:nth-of-type(3) a{
		font-size: 30px;
		margin-left: 25px;
	}
	.sjh{
		display: flex;
	}
	.sjh div{
		margin-top: 30px;	
		height: 40px;
		
	}
	.sjh div:nth-of-type(1){
		flex: 1;
		margin-left: 10px;
		transform: scale(1.1);
	}
	.sjh div:nth-of-type(2){
		flex: 4;
		margin-left: -40px;
		font-size: 20px;
	}
	.sjh div:nth-of-type(3){
		flex: 1;
	}
	.sjh div:nth-of-type(3) a{
		padding: 8px 10px;
		background: #FF9966;
		color: white;
		border-radius: 20px;
	}
	.juan div p{
		margin-top: -10px;
		font-size: 14px;
	}
	.juan div h1{
		color: #FF9966;
	}
	.juan{
		width: 93%;
		height: 100px;
		box-shadow: 0px 0px 20px 5px #dafff7;
		margin-left: 10px;
		margin-top: -20px;
		display: flex;
	}
	.juan div{
		flex: 1;
		text-align: center;
	}
	.juan div{
		flex: 5;
		text-align: center;
	}
	.tbu{
		margin-left: 20px;
		margin-top: 15px;
	}
	.hot_item{
		font-size: 25px;
		color: red;
		width: 80px;
		text-align: center;
		margin: 0 12px;
		font-weight: 700;
		position: relative;
		left: 130px;
		top: -70px;
	}
	.hot_item.router-link-active{
		text-decoration: none;
		color: #ef4238;
	}
	.hot_swtich{
		display: flex;
		line-height: 45px;
	}
</style>
