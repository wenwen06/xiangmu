import Vue from "vue";
import VueRouter from "vue-router";
import movie from './movie/index.js'
import cinema from './cinema/index.js'
import main from './main/index.js'
import mine from './mine/index.js'
import Chongz from './Chongz/Chongz'
import Pai from './Pai/Pai'
import Fenl from './Fenl/Fenl'
import Huiy from './Huiy/Huiy'
import Wanj from './Wanj/Wanj'
import Lianx from './Lianx/Lianx'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes:[
	  movie,
	  cinema,
	  main,
	  mine,
	  Chongz,
	  Pai,
	  Fenl,
	  Huiy,
	  Wanj,
	  Lianx,
	  {
	    path:'/*',
	    redirect:'/movie'
	  }
  ]
});

export default router;
