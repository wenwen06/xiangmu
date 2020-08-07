<template>
	<div>
		<div class="lun">
			<van-swipe class="lun" :autoplay="3000">
			  <van-swipe-item v-for="(image, index) in images2" :key="index">
			    <img v-lazy="image" width="100%" />
			  </van-swipe-item>
			</van-swipe>
		</div>
		<div class="yi">
						  <img src="../../../public/img/yi.png" />
		</div>
		<div class="yi">
			<img src="../../../public/img/yi2.png" />
		</div>
		<div class="kuab"></div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'vant';
	import TabBar from '../../components/TabBar/TabBar.vue'
	
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	
	Vue.use(Lazyload);
	export default {
		name:"Main",
		components:{
			TabBar
		},
	  data() {
	    return {
	      active: 0,
	      images: [
	        '/img/kuai.png',
	        '/img/kuai2.png',
			'/img/kuai3.png'
	      ],
		  images2: [
		    '/img/kuai.png',
			'/img/kuai2.png'
		  ]
	    };
	  },
	};
</script>

<style>
	.kuab{
			width: 100%;
			height: 75px;
			background: #CACACA;
		}
		.kuab2{
			width: 100%;
			height: 75px;
			background: #CACACA;
			margin-top: 600px;
		}
		.yi{
			margin-left: 32px;
		}
		.huan ul li{
			list-style: none;
			float: left;
			margin-left: 55px;
		}
		.huan ul{
			margin-left: -20px;
		}
		.na a{
			font-size: 20px;
			position: relative;
			top: -6px;
			left: 5px;
		}
		.xian2{
			width: 100%;
			height: 5px;
			background: #e8e8e8;
			margin-top: 500px;
		}
		.nans{
			font-size: 26px;
			margin-top: 20px;
			margin-left: 20px;
			color: #FF9966;
		}
		.tbu{
		}
		.lab{
			padding: 17px;
			color: #ff9966;
			font-size: 20px;
		}
		.lab2{
			padding: 0 0 0 140px;
			color: #ff9966;
			font-size: 20px;
		}
		#kk{
			width: 85%;
			height: 50px;
			background: #f8f8f8;
			margin: 40px;
			border-radius: 30px;
		}
		#kk2{
			width: 44%;
			height: 120px;
			border: 1px solid #cacaca;
			margin: 20px 0 0 160px;
		}
		#kk2 h1{
			padding: 0 0 0 50px;
		}
		#kk2 button{
			background: #FF9966;
			border: #FF9966;
			padding: 15px 40px;
			border-radius: 30px;
			color: white;
			margin: 10px 0 0 50px;
		}
		#kk2 p{
			padding: 5px;
		}
		#kk a{
			font-size: 14px;
			position: relative;
			top: -5px;
			
		}
		#kk a:nth-of-type(2){
			font-size: 14px;
			margin-left: 10px;
			position: relative;
			top: -5px;
		}
	.bj{
	  width: 90%;
	  height: 120px;
	  border-radius: 10px;
	  background: #f8f8f8;
	  margin-left: 5%;
	  margin-top: 30px;
	}
	.tu{
		padding: 10px;
	}
</style>
