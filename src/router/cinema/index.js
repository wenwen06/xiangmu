export default{
    path:'/cinema',
    component:()=>import('@/views/Cinema/Cinema.vue'),
	children:[
	    {
	        path:'Sye',
	        component:()=>import('@/components/Sye/Sye.vue'),
	    },
		{
		    path:'Shouye',
		    component:()=>import('@/components/Shouye/Shouye.vue'),
		},
		{
		    path:'/cinema',
		    redirect:'/cinema/Sye'
		 }
	]
}