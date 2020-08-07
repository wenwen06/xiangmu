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
					<img src="../../../public/img/mianf2.png" />
						<p>免费</p>
				</router-link>
				<router-link tag="li" to="/Wanj">
					<img src="../../../public/img/wanj2.png" />
						<p>完结</p>
				</router-link>
				<router-link tag="li" to="/Fenl">
					<img src="../../../public/img/fenl2.png" />
						<p>分类</p>
				</router-link>
				<router-link tag="li" to="/Pai">
					<img src="../../../public/img/bangd2.png" />
						<p>榜单</p>
				</router-link>
				<router-link tag="li" to="/Huiy">
					<img src="../../../public/img/hiy2.png" />
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
			<div class="jiu">
				<img src="../../../public/img/jiuyang.png" />
			</div>
			<div class="huan"  v-show="flag==1">
				<ul>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
				</ul>
			</div>
			<div class="huan" v-show="flag==2">
				<ul>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异2             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异2             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
				</ul>
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
			<div class="huan"  v-show="flage2==1">
				<ul>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异            连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
				</ul>
			</div>
			<div class="huan" v-show="flage2==2">
				<ul>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异2             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异2             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异2             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异2             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
				</ul>
			</div>
			<div class="geng">
				<a class="gengd">更多</a>
			</div>
			<div class="yi">
				<button v-on:click="changeflage2">换一换...</button>
			</div>
		</div>
		<div class="nan">
			<div class="na">
				<van-icon class="nans" name="friends" />
				<a class="">经典推荐</a>
			</div>
			<div class="huan"  v-show="flage3==1">
				<ul>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异            连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
				</ul>
			</div>
			<div class="huan" v-show="flage3==2">
				<ul>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异2             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异2             连载中</p>
					</li>
					<li>
						<img src="../../../public/img/shengjue.png" />
						<h4>画尸怪谈</h4>
						<p>悬疑灵异             连载中</p>
					</li>
				</ul>
			</div>
			<div class="geng">
				<a class="gengd">更多</a>
			</div>
			<div class="yi">
				<button v-on:click="changeflage3">换一换...</button>
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
			flage2:1,
			corunt2:1,
			flage3:1,
			corunt3:1,
	      images: [
	        '/img/syelun.png',
	        '/img/syelun2.png',
			'/img/syelun3.png',
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
		  },
		  changeflage2(){
		  			  this.corunt2++;
		  			  if(this.corunt2>2){
		  			  this.corunt2=1;
		  			  }
		  			  this.flage2=this.corunt2;
		  },
		  changeflage3(){
		  			  this.corunt3++;
		  			  if(this.corunt3>2){
		  			  this.corunt3=1;
		  			  }
		  			  this.flage3=this.corunt3;
		  }
	  }
	};
</script>

<style>
	.huan ul li{
		list-style: none;
		float: left;
		margin-left: 40px;
	}
	.huan ul{
		margin-left: -20px;
	}
	.jiu{
		margin-top: 10px;
	}
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
		margin-top: 20px;
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
	}
	ul li{
		list-style: none;
	}
	#footer2 ul li{
		flex: 1;
		margin-left: 0px;
	}
	#footer2 li.active{
		color: #f03d37;
	}
	#footer2 li.router-link-active{
		color: #f03d37;
	}
	#footer2 ul img{
		transform: scale(0.8);
	}
	#footer2 ul p{
		font-size: 18px;
		margin-top: 0px;
	}
	.xian{
		width: 100%;
		height: 5px;
		background: #e8e8e8;
		margin-top: 60px;
	}
</style>
