(function() {
	new Vue({
		el:'#box',
		data:{
			myData:[],
			t1:'',
			b:'b'
		},
		methods:{
			get:function(){
				this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
					wd:this.t1
				},{
					jsonp:'cb'
				}).then(function(res){
					this.myData=res.data.s
				},function(res){
					
				})
			}
		}
	})
})();