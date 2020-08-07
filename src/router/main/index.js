export default{
    path:'/main',
    component:()=>import('@/views/Main/Main.vue'),
	children:[
	    {
	        path:'Fxxs',
	        component:()=>import('@/components/Fxxs/Fxxs.vue'),
	    },
		{
		    path:'Fxmh',
		    component:()=>import('@/components/Fxmh/Fxmh.vue'),
		},
		{
		    path:'/main',
		    redirect:'/main/Fxxs'
		 }
	]
}