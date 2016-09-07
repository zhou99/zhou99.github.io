window.onload=function (){
	var sec=document.getElementById('sec');
	var sec1=sec.getElementsByTagName('img');
	var index=document.getElementsByTagName('ul')[1];
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
	var tab=document.getElementsByTagName('ul')[2];
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
	var wei=document.getElementsByTagName('ul')[0];
	var wei1=wei.getElementsByTagName('li')[0];
	var sao=document.getElementById('sao');
		wei1.onmouseover=function(){
			sao.style.display='block';
		}
		wei1.onmouseout=function(){
			sao.style.display='none';
		}
};