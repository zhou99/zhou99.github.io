window.onload=function (){
	var sec=document.getElementById('sec');
	var sec1=sec.getElementsByTagName('img');
	var index=document.getElementsByTagName('ul')[2];
	var index1=index.getElementsByTagName('li');
	var num=0;
	var time=setInterval(a,3000);
	function a(){
		num++;
		if(num>=6){
			num=0;
		}
		for(j=0;j<index1.length;j++){	
			index1[j].className='';
			sec1[j].style.display='none';
		}
		index1[num].className='control';
		sec1[num].style.display='block';
	}
	for(i=0;i<index1.length;i++){
		index1[i].n=i;
		index1[i].onmouseover=function(){
			clearInterval(time);
			for(j=0;j<index1.length;j++){	
				index1[j].className='';
				sec1[j].style.display='none';
			}
			index1[this.n].className='control';
			sec1[this.n].style.display='block';
		}
		index1[i].onmouseout=function(){
			time=setInterval(a,3000);
		}
	}
	var arc=document.getElementById('article1');
	var arc1=arc.getElementsByTagName('div');
	var tab=document.getElementsByTagName('ul')[3];
	var tab1=tab.getElementsByTagName('li');
	for(i=0;i<tab1.length;i++){
		tab1[i].n=i;
		tab1[i].onmouseover=function(){
			for(j=0;j<tab1.length;j++){	
				tab1[j].className='';
				arc1[j].style.display='none';
			}
			tab1[this.n].className='bg';
			arc1[this.n].style.display='block';
		}
	}
	/*var wei=document.getElementsByTagName('ul')[0];
	var wei1=wei.getElementsByTagName('li')[0];
	var sao=document.getElementById('sao');
		wei1.onmouseover=function(){
			sao.style.display='block';
		}
		wei1.onmouseout=function(){
			sao.style.display='none';
		}*/
	var button=document.getElementById('button');
	var client=document.documentElement.clientHeight||document.body.clientHeight
	window.onscroll=function(){
		var scroll=document.documentElement.scrollTop||document.body.scrollTop;
		if(scroll>client){
			button.style.display='block';
		}else{
			button.style.display='none';
		}
	}


	var dom = document.getElementById('clock');
	var ctx = dom.getContext('2d');
	var width = ctx.canvas.width;
	var height = ctx.canvas.height;
	var r = width/2;
	var rem= width/200;

	//绘制背景
	function drawBackground(){
		ctx.save();
		ctx.translate(r,r);
		ctx.beginPath();
		ctx.lineWidth=10*rem;
		ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);
		ctx.stroke();

		var hourNumbers = [3,4,5,6,7,8,9,10,11,12,1,2];
		ctx.font = '18px Arial';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		hourNumbers.forEach(function(number,i) {
			var rad = 2*Math.PI/12*i;
			var x = Math.cos(rad)*(r-30*rem);
			var y = Math.sin(rad)*(r-30*rem);

			ctx.fillText(number,x,y);
		})

		for(var i=0;i<60;i++){
			var rad=2*Math.PI/60*i;
			var x = Math.cos(rad)*(r-18*rem);
			var y = Math.sin(rad)*(r-18*rem);
			ctx.beginPath();
			if(i%5==0){
				ctx.fillStyle='#000';
				ctx.arc(x,y,2*rem,0,2*Math.PI,false);
			}else{
				ctx.fillStyle='#ccc';
				ctx.arc(x,y,2*rem,0,2*Math.PI,false);
			}
			ctx.fill();


		}

	}

	//小时
	function drawHours (hour,minute) {
		ctx.save();
		ctx.beginPath();
		var rad=2*Math.PI/12*hour;
		var mrad= 2*Math.PI/12/60*minute;
		ctx.rotate(rad+mrad);
		ctx.lineWidth=6*rem;
		ctx.lineCap='round';
		ctx.moveTo(0,10*rem);
		ctx.lineTo(0,-r/2);
		ctx.stroke();
		ctx.restore();

	}
	//分针
	function drawMinute(minute){
		ctx.save();
		ctx.beginPath();
		var rad=2*Math.PI/60*minute;
		ctx.rotate(rad);
		ctx.lineWidth=3*rem;
		ctx.lineCap='round';
		ctx.moveTo(0,10*rem);
		ctx.lineTo(0,-r+31*rem);
		ctx.stroke();
		ctx.restore();
	}
	//秒针
	function drawSecond(second){
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle='#c14543';
		var rad=2*Math.PI/60*second;
		ctx.rotate(rad);
		ctx.moveTo(-2*rem,20*rem);
		ctx.lineTo(2*rem,20*rem);
		ctx.lineTo(0.8*rem,-r+18*rem);
		ctx.lineTo(-0.8*rem,-r+18*rem);
		ctx.fill();
		ctx.restore();
	}
	//中间小圆点
	function drawDot(){
		ctx.beginPath();
		ctx.fillStyle='#fff';
		ctx.arc(0,0,3*rem,0,2*Math.PI,false);
		ctx.fill();
	}

	//主函数
	function draw () {
		ctx.clearRect(0,0,width,height);
		var now = new Date();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		drawBackground();
		drawHours (hour,minute);
		drawMinute(minute);
		drawSecond(second);
		drawDot();
		ctx.restore();
	}
	draw();
	setInterval(draw,1000);
};