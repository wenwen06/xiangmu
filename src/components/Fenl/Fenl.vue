<template>
	<div>
		     <button v-for="item in tabList" :key="item.type" @click="filterGoods(item.type)">{{item.name}}</button>
		<ul>
		    <li v-for ="item in goods" :key="item.id">
		   <p>name:{{item.name}}</p>
		   <p>belong:{{item.belong}}</p>
		   <p>price:{{item.price}}</p>
		   <p>nums:{{item.nums}}</p>
		   <p>promotion:{{item.promotion}}</p>
		  </li>
		</ul>
		  </div>
</template>

<script>
	export default{
		 data() {
		  return {
		    goodList:[
		      {id: 1,name:'苹果',belong:1,price:10,nums:'100kg',promotion:'促销'},
		        {id: 2,name:'香蕉',belong:1,price:50,nums:'200kg',promotion:'促销'},
		          {id: 3,name:'葡萄',belong:1,price:100,nums:'300kg',promotion:'促销'},
		            {id: 5,name:'西红柿',belong:2,price:120,nums:'1200kg',promotion:'促销'},
		              {id: 6,name:'苦瓜',belong:2,price:140,nums:'1020kg',promotion:'促销'}
		    ],
		     tabList:[
		        {type:0,name:'全部'},
		        {type:1,name:'水果'},
		        {type:2,name:'蔬菜'},
		      ],
		      goods:[],
		    // fruit:''
		  }
		},
		 methods: {
		  filterGoods(type){
		    if(type ==0){
		      // this.goods =this.goodList
		      this.goods.splice(0);
		      this.goods.push(...this.goodList)
		    }else{
		      let res =this.goodList.filter(item=>{
		        return item.belong ==type
		      })
		      this.goods.splice(0);
		      this.goods.push(...res)
		    }
		  }
		 } ,
		 mounted() {
		   this.filterGoods(0)
		 },
		}
</script>

<style>
	   li{
	  margin-top: 20px
	}
	input{
	  background: red
	}
</style>
