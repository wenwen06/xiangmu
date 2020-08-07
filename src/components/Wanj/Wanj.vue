<template>
	<div>
		<van-tabs v-model="activeName">
		  <van-tab title="男生" name="a">
			  <div class="nan">
				  <div>
					  <img src="../../../public/img/qiz.png" />
				  </div>
				  <div>
				  	<h3>妻子的诱惑</h3>
				  	<p>为了治好母亲的病，刚刚大学毕业的青年张辰，被迫做了车模梁思雨家的上门女婿。面对梁思雨和她家人的压迫，张辰每天都过的很压抑，直到有一天他发现了妻子的秘密……</p>
				  	<p class="zz">白尘<span style="margin-left: 130px;color: #00ffd8;">悬疑灵异</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
				  </div>
			  </div>
			  <div class="nan">
			  		<div>
			  		  <img src="../../../public/img/yinh.png" />
			  		</div>
			  		<div>
			  			<h3>隐婚甜宠</h3>
			  			<p>一场精心设计，她被未婚夫陷害失身，成为笑话，一夕之间，家族破产，她走投无路，只好转身求他——傅战霆，这个权势滔天的男人，让她摇身一变成为未婚夫的小婶婶！</p>
			  			<p class="zz">月上云锦<span style="margin-left: 130px;color: #00ffd8;">都市现实</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			  		</div>
			  </div>
			  <div class="nan">
			  		<div>
			  		  <img src="../../../public/img/zhaos.png" />
			  		</div>
			  		<div>
			  			<h3>战少甜宠小妻子</h3>
			  			<p>不就是想偷拍美男照换点考试答案嘛……怎么就惹上了战家继承人战冷睿……喂，我都认错了，战少你一个劲的往自己身上贴是怎么回事啊？从此以后，战少粘自己上瘾。她做题，战少当私人家教</p>
			  			<p class="zz">战九九<span style="margin-left: 130px;color: #00ffd8;">都市现实</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			  		</div>
			  </div>
			  <div class="nan">
			  		<div>
			  		  <img src="../../../public/img/shanh.png" />
			  		</div>
			  		<div>
			  			<h3>闪婚小妻超甜的</h3>
			  			<p>睡了总裁的阮小沫，本想喵悄喵悄地逃离，但某人岂会就此放过！和总裁逛街时，夸了句某牌子好看，总裁豪言：“以后这个牌子就专属于你！”想和设计师偶像见面，总裁霸言：“明天这个设计师和他的团队亲自来见你！...</p>
			  			<p class="zz">席小绵<span style="margin-left: 130px;color: #00ffd8;">都市现实</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			  				  </div>
			  </div>
		  </van-tab>
		  <van-tab title="女生" name="b">
			  <div class="nan">
			  				  <div>
			  					  <img src="../../../public/img/yongb.png" />
			  				  </div>
			  				  <div>
			  				  	<h3>拥抱你的全世界</h3>
			  				  	<p>走投无路时，她被一个看似冰冷，实则温情入骨的男人所救。她原以为，他是天上粲然星辰，高高在上，触不可及。直到他单膝跪地，递上手中钻戒：“我爱你，嫁给我。</p>
			  				  	<p class="zz">江星萝<span style="margin-left: 130px;color: #00ffd8;">现代爱情</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			  				  </div>
			  </div>
			  <div class="nan">
			  		<div>
			  		  <img src="../../../public/img/mengb.png" />
			  		</div>
			  		<div>
			  			<h3>萧少的萌宝甜妻</h3>
			  			<p>面对重伤的男友，破败的家业，她走上了一条不归之路——只要陪那个陌生的男人一个晚上，她就有医药费，就有重振家业的资本……然而，当她发现自己怀孕了</p>
			  			<p class="zz">掌上明猪<span style="margin-left: 130px;color: #00ffd8;">都市现实</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			  		</div>
			  </div>
			  <div class="nan">
			  		<div>
			  		  <img src="../../../public/img/bix.png" />
			  		</div>
			  		<div>
			  			<h3>陛下，本宫要废了你！</h3>
			  			<p>她，大梁的公主，大祁的睿王妃。只因在沙场上多看了他一眼，从此便对他死心塌地，至死不渝。三年前，她终于可以嫁给自己心中的英雄，却发现英雄并不爱她，</p>
			  			<p class="zz">卜四爷<span style="margin-left: 130px;color: #00ffd8;">古代情缘</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			  		</div>
			  </div>
			  <div class="nan">
			  		<div>
			  		  <img src="../../../public/img/shanh.png" />
			  		</div>
			  		<div>
			  			<h3>蜀绣良缘</h3>
			  			<p>蜀绣苏家的大小姐，生来容貌动人，受尽家族宠爱，一双巧手绣得出嫣然的莲花，入画的锦鲤，望不见的山水，未婚夫萧明是军阀世家留洋归来的少爷，活脱脱的人生赢家。</p>
			  			<p class="zz">云中白鹤<span style="margin-left: 130px;color: #00ffd8;">现代爱情</span><span style="margin-left: 30px;color: #FF9966;">已完结</span></p>
			  		</div>
			  </div>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      activeName: 'a',
	    };
	  },
	};
</script>

<style>
	.zz{
		margin-top: 40px;
	}
	.nan{
		display: flex;
	}
	.nan div:nth-of-type(1){
		flex: 1;
		padding: 20px;
	}
	.nan div:nth-of-type(2){
		margin-left: -190px;
		flex: 1;
	}
</style>
