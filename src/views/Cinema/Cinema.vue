<template>
	<div id="main">
		<div class="hot_swtich">
			<router-link tag="div" to="/cinema/Sye" class="hot_item active">小说</router-link>
			<router-link tag="div" to="/cinema/Shouye" class="hot_item active">漫画</router-link>
			<input class="input" />
			<van-icon class="fenx" name="share" />	
		</div>
		<TabBar></TabBar>
		<router-view></router-view>
	</div>
</template>

<script>
	import TabBar from '../../components/TabBar/TabBar.vue'
	export default{
		name:"Cinema",
		components:{
			TabBar
		}
	}
</script>

<style>
	.fenx{
		font-size: 26px;
		margin-left: 30px;
		margin-top: 10px;
	}
	.input{
		width: 200px;
		height: 25px;
		margin-left: 20px;
		margin-top: 10px;
		border-radius: 30px;
	}
	 .hot_swtich{
		display: flex;
		height: 100%;
		line-height: 45px;
	}
	 .hot_item{
		font-size: 20px;
		color: #666;
		width: 80px;
		text-align: center;
		margin: 0 12px;
		font-weight: 700;
	}
	 .hot_item.router-link-active{
		color: #ef4238;
		border-bottom: 2px solid #ef4238;
	}
</style>
