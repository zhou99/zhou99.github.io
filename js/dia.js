(function(){
	var dd=document.getElementById('dd');
	var zhe=document.getElementById('zhe');
	var button=document.getElementById('button');
	var one=document.getElementById('one');
	var movex=0;
	var movey=0;
	var is=false;
	function center(e) {
		var bodyw=document.body.clientWidth;
		var bodyh=document.body.clientHeight;
		var ew=e.offsetWidth;
		var eh=e.offsetHeight;
		e.style.left=(bodyw-ew)/2+'px';
		e.style.top=(bodyh-eh)/2+'px';
	}
	dd.addEventListener('mousedown',function(e)){
		movex=e.PageX-dd.offsetLeft;
		movey=e.PageY-dd.offsetTop;
		is=true;
	}
	document.onmousemove=function(e){
		var mousex=e.PageX;
		var mousey=e.PageY;

		var mx=0;
		var my=0;
		if(is===true){
			mx=mousex-movex;
			my=mousey-movey;
			dd.style.left=mx+'px';
			dd.style.top=my+'px';
		var bodyw=document.documentElement.clientWidth;
		var bodyh=document.documentElement.clientHeight;
		var digw=dd.offsetWidth;
		var digh=dd.offsetHeight;
		var maxw=bodyw-digx;
		var maxh=bodyh-digh;
		mx=Math.min(Math.max(0,maxw));
		my=Math.min(Math.max(0,maxh));
		}
	}
	document.onmouseup=function(){
		is=false;
	}
	one.onclick=function(){
		dd.style.display='block';
		zhe.style.display='block';
		center(dd);
	}
	button.onclick=function(){
		dd.style.display='none';
		zhe.style.display='none';
	}
})();