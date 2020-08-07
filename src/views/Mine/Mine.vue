<template>
	<div>
		<Wode></Wode>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import TabBar from '../../components/TabBar/TabBar.vue'
	import Wode from '../../components/Wode/Wode.vue'
	export default{
		name:"Cinema",
		components:{
			TabBar,
			Wode
		}
	}
</script>

<style>
</style>
