<template>
	<div>
		<div class="tbu">
			<h2>会员</h2>
		</div>
		<div class="heng"></div>
		<div class="zliao">
			<img src="../../../public/img/toux.png" />
			<a class="aa">文文</a><p class="aaa">开通会员免费畅享会员书库</p>
			<a class="aaaa">开通</a>
		</div>
		<div class="heng"></div>
		<div class="huiyuan">
			<div>
				<img src="../../../public/img/huiyku.png" />
				<p>会员书库</p>
			</div>
			<div>
				<img src="../../../public/img/teq.png" />
				<p>会员特权</p>
			</div>
		</div>
		<div class="heng2"></div>
		<div class="xs">
			<div>
				<img src="../../../public/img/chun.png" />
			</div>
			<div>
				<h3>春離</h3>
				<p>爱要毫无保留才更淋漓畅快，我愿飞蛾扑火追寻着你，即便粉身碎骨，亦要不负昭华。</p>
				<p class="zz">三水一<span style="margin-left: 130px;color: #00ffd8;">现代爱情</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			</div>
		</div>
		<div class="xs">
			<div>
				<img src="../../../public/img/fang.png" />
			</div>
			<div>
				<h3>彷徨</h3>
				<p>《彷徨》是近代文学家鲁迅创作的小说集，于1926年8月由北京北新书局初版，.</p>
				<p class="zz">鲁迅<span style="margin-left: 130px;color: #00ffd8;">军事历史</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			</div>
		</div>
		<div class="xs">
			<div>
				<img src="../../../public/img/ztan.png" />
			</div>
			<div>
				<h3>这个侦探有点冷</h3>
				<p>三年前，湮灭在芜城犯下连环杀人案，后消匿踪影，三年后，湮灭卷土重来，</p>
				<p class="zz">白尘<span style="margin-left: 130px;color: #00ffd8;">悬疑灵异</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.zz{
		margin-top: 80px;
	}
	.xs{
		display: flex;
	}
	.xs div:nth-of-type(1){
		flex: 1;
		padding: 20px;
	}
	.xs div:nth-of-type(2){
		margin-left: -190px;
		flex: 1;
	}
	.huiyuan{
		display: flex;
		margin-top: 20px;
	}
	.huiyuan div:nth-of-type(1){
		flex: 1;
		margin-left: 100px;
	}
	.huiyuan div p{
		margin-left: 7px;
		margin-top: 0px;
	}
	.huiyuan div:nth-of-type(2){
		flex: 1;
		margin-left: 80px;
	}
	.aaaa{
		background: #FF9966;
		padding: 5px 10px;
		color: white;
		position: relative;
		left: 440px;
		top: -50px;
	}
	.aaa{
		font-size: 18px;
		margin-top: -60px;
		margin-left: 110px;
	}
	.aa{
		font-size: 16px;
		position: relative;
		top: -70px;
	}
	.heng{
		background: #E8E8E8;
		width: 100%;
		height: 2px;
	}
	.heng2{
		background: #E8E8E8;
		width: 100%;
		height: 7px;
	}
	.zliao img{
		transform: scale(0.7);
		padding: 10px;
	}
	.tbu h2{
		text-align: center;
		margin-top: 10px;
	}
</style>
