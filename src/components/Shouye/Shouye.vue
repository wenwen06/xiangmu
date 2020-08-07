<template>
	<div class="xs">
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(image, index) in images" :key="index">
		    <img v-lazy="image" />
		  </van-swipe-item>
		</van-swipe>
		<div id="footer2">
			<ul>
				<router-link tag="li" to="/movie">
					<img  src="../../../public/img/mianf.png" />
						<p>免费</p>
				</router-link>
				<router-link tag="li" to="/cinema">
					<img src="../../../public/img/wanj.png" />
						<p>完结</p>
				</router-link>
				<router-link tag="li" to="/main">
					<img src="../../../public/img/fenl.png" />
						<p>分类</p>
				</router-link>
				<router-link tag="li" to="/mine">
					<img src="../../../public/img/bangd.png" />
						<p>榜单</p>
				</router-link>
				<router-link tag="li" to="/mine">
					<img src="../../../public/img/hiy.png" />
						<p>会员</p>
				</router-link>
			</ul>
		</div>
		<div class="xian">
		</div>
		<div class="nan">
			<div class="na">
				<van-icon class="nans" name="friends" />
				<a class="">男生精选</a>
			</div>
			<div class="huan"  v-show="flag==1">
				<router-link tag="li" to="/mine">
					<img src="../../../public/img/huan.png" />
				</router-link>
			</div>
			<div class="huan" v-show="flag==2">
				<img src="../../../public/img/huan2.png" />
			</div>
			<div class="geng">
				<a class="gengd">更多</a>
			</div>
			<div class="yi">
				<button v-on:click="changeflag">换一换...</button>
			</div>
		</div>
		<div class="nan">
			<div class="na">
				<van-icon class="nans" name="friends" />
				<a class="">经典推荐</a>
			</div>
			<div class="huan"  v-show="flage==1">
				<img src="../../../public/img/huan.png" />
			</div>
			<div class="huan" v-show="flage==2">
				<img src="../../../public/img/huan2.png" />
			</div>
			<div class="geng">
				<a class="gengd">更多</a>
			</div>
			<div class="yi">
				<button v-on:click="changeflage">换一换...</button>
			</div>
		</div>
		<div class="xian">
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	
	Vue.use(Lazyload);
	export default {
	  data() {
	    return {
			flag:1,
			count:1,
			flage:1,
			corunt:1,
	      images: [
	        '/img/syemanlun.png',
	        '/img/syemanlun2.png',
			'/img/syemanlun3.png',
	      ],
	    };
	  },
	  methods:{
		  changeflag(){
			  this.count++;
			  if(this.count>2){
			  this.count=1;
			  }
			  this.flag=this.count;
		  },
		  changeflage(){
		  			  this.corunt++;
		  			  if(this.corunt>2){
		  			  this.corunt=1;
		  			  }
		  			  this.flage=this.corunt;
		  }
	  }
	};
</script>

<style>
	.yi button{
		padding: 9px 43px;
		background: #e8e8e8;
		border: #e8e8e8;
		position: relative;
		left:280px;
		top: -10px;
		border-radius: 30px;
	}
	.gengd{
		background: #e8e8e8;
		padding: 10px 60px;
		border-radius: 30px;
		position: relative;
		left: 30px;
		top: 20px;
	}
	.huan{
		margin-left: -20px;
	}
	.na a{
		font-size: 20px;
		position: relative;
		top: -6px;
		left: 5px;
	}
	.nans{
		font-size: 26px;
		margin-top: 20px;
		color: #FF9966;
	}
	.xs{
		padding: 40px;
	}
	#footer2{
		width: 100px;
		height: 70px;
		background: white;
	}
	#footer2 ul{
		display: flex;
		text-align: center;
		align-items: center;
		margin-top: -20px;
		margin-left: 20px;
	}
	ul li{
		list-style: none;
	}
	#footer2 ul li{
		flex: 1;
		margin-left: -50px;
	}
	#footer2 li.active{
		color: #f03d37;
	}
	#footer2 li.router-link-active{
		color: #f03d37;
	}
	#footer2 ul img{
		transform: scale(0.4);
	}
	#footer2 ul p{
		font-size: 12px;
		margin-top: -50px;
	}
	.xian{
		width: 100%;
		height: 5px;
		background: #e8e8e8;
		margin-top: 60px;
	}
</style>
