<template>
	<div id="footer">
		<ul>
			<router-link tag="li" to="/movie">
				<van-icon name="coupon" />
					<p>书架</p>
			</router-link>
			<router-link tag="li" to="/cinema">
				<van-icon name="wap-home" />
					<p>首页</p>
			</router-link>
			<router-link tag="li" to="/main">
				<van-icon name="printer" />
					<p>发现</p>
			</router-link>
			<router-link tag="li" to="/mine">
				<van-icon name="friends-o" />
					<p>我的</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Icon } from 'vant';
	
	Vue.use(Icon);
	export default{
		name:"TabBar"
	}
</script>

<style>
	#footer{
		width: 100%;
		height: 70px;
		background: white;
		border-top: 2px solid #ebe83e;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	#footer ul{
		display: flex;
		text-align: center;
		height: 70px;
		align-items: center;
	}
	ul li{
		list-style: none;
	}
	#footer ul li{
		flex: 1;
		height: 50px;
	}
	#footer li.active{
		color: #f03d37;
	}
	#footer li.router-link-active{
		color: #f03d37;
	}
	#footer ul p{
		font-size: 12px;
		line-height: 5px;
	}
</style>
