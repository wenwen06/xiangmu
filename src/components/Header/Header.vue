<template>
    <div class="tbu">
		<van-tabs v-model="active">
		  <van-tab title="小说" class="xian">
		  <div class="bj">
		  <div class="tu">
		  <van-swipe :autoplay="3000">
		    <van-swipe-item v-for="(image, index) in images" :key="index">
		      <img :src='image' />
		    </van-swipe-item>
		  </van-swipe>
		  </div>
		  </div>
			<div id="kk">
				<van-icon class="lab" name="volume" />
				<a>每月福利-充值激活码大派送</a>
				<van-icon class="lab2" name="point-gift" />
				<a>签到</a>
			</div>
			<div id="kk2">
				<h1>暂无作品</h1>
				<p>关注微信公众号，获取更多福利</p>
				<button>去商城</button>
			</div>
		</van-tab>
		
		  <van-tab title="漫画" class="xian">
		  <div class="bj">
		  <div class="tu2">
		  <van-swipe :autoplay="3000">
		    <van-swipe-item v-for="(image, index) in images2" :key="index">
		      <img :src='image' />
		    </van-swipe-item>
		  </van-swipe>
		  </div>
		  <div class="wz">
		  <h2></h2>
		  </div>
		  </div>
		  <div id="kk">
		  	<van-icon class="lab" name="volume" />
		  	<a>每月福利-充值激活码大派送</a>
		  	<van-icon class="lab2" name="point-gift" />
		  	<a>签到</a>
		  </div>
		  <div id="kk2">
		  	<h1>暂无作品</h1>
		  	<p>关注微信公众号，获取更多福利</p>
		  	<button>去商城</button>
		  </div>
		  </van-tab>
		  </van-tabs>
	</div>
    
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
export default {
  data() {
    return {
      active: 0,
      images: [
        '/img/lun.png',
        '/img/lun2.png',
		'/img/lun3.png'
      ],
	  images2: [
	    '/img/manlun.png',
		'/img/manlun2.png'
	  ]
    };
  },
};
</script>

<style scoped>
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
.xian{
  border-top: 1px solid #cbcbcb;
  margin-top: 10px;
}
.tu{
	padding: 10px;
}
</style>