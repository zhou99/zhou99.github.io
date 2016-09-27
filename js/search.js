(function() {
	var c=new Vue({
		el:'#box',
		data:{
			mydata:[],
			t1:'',
			b:'b'
		},
		methods:{
			get:function(){
				this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
					wd:'this.t1'
				},{
					jsonp:'cb'
				}).then(function(res){
					this.mydata=res.data.s;
				},function(res){

				})
			}
		}
	})
})()