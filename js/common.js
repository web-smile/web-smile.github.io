
var Tween={Linear:function(t,b,c,d){return c*t/d+b},Quad:{easeIn:function(t,b,c,d){return c*(t/=d)*t+b},easeOut:function(t,b,c,d){return -c*(t/=d)*(t-2)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b}return -c/2*((--t)*(t-2)-1)+b}},Cubic:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b}return c/2*((t-=2)*t*t+2)+b}},Quart:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t+b},easeOut:function(t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t+b}return -c/2*((t-=2)*t*t*t-2)+b}},Quint:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t*t+b}return c/2*((t-=2)*t*t*t*t+2)+b}},Sine:{easeIn:function(t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b},easeOut:function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOut:function(t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b}},Expo:{easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOut:function(t,b,c,d){if(t==0){return b}if(t==d){return b+c}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b}return c/2*(-Math.pow(2,-10*--t)+2)+b}},Circ:{easeIn:function(t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOut:function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return -c/2*(Math.sqrt(1-t*t)-1)+b}return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b}},Elastic:{easeIn:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b)},easeInOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d/2)==2){return b+c}if(!p){p=d*(0.3*1.5)}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}if(t<1){return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b}return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b}},Back:{easeIn:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*(t/=d)*t*((s+1)*t-s)+b},easeOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}if((t/=d/2)<1){return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b}return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b}},Bounce:{easeIn:function(t,b,c,d){return c-Tween.Bounce.easeOut(d-t,0,c,d)+b},easeOut:function(t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else{if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b}else{if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b}}}},easeInOut:function(t,b,c,d){if(t<d/2){return Tween.Bounce.easeIn(t*2,0,c,d)*0.5+b}else{return Tween.Bounce.easeOut(t*2-d,0,c,d)*0.5+c*0.5+b}}}};

function move(obj, json, options)
{
    options=options || {};
    var duration=options.duration || 1000;
    var easing=options.easing || Tween.Linear;
    
    var start={};
    var dis={};
    var count=Math.floor(duration/30);
    var n=0;
    
    for (var name in json)
    {
        start[name]=parseFloat(getStyle(obj, name));
        dis[name]=parseFloat(json[name])-start[name];
    }
    
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        n++;
        
        for (var name in json)
        {
            var cur=easing(duration*n/count, start[name], dis[name], duration);
            
            if (name == 'opacity')
            {
                obj.style[name]=cur;
            }
            else
            {
                obj.style[name]=cur+'px';
            }
        }
        
        if (n == count)
        {
            clearInterval(obj.timer);
            options.complete && options.complete();
        }
    }, 30);
}


function getStyle(obj, sName)
{
    return (obj.currentStyle || getComputedStyle(obj, false))[sName];
}
















function getElementsByClassName(oParent, sClass)
{
	var aTmp=oParent.getElementsByTagName('*');
	var aResult=[];
	var i=0;
	
	for(i=0;i<aTmp.length;i++)
	{
		if(aTmp[i].className==sClass)
		{
			aResult.push(aTmp[i]);
		}
	}
	
	return aResult;
}

function init()
{
	for(var i=0; i<aBtn.length; i++)
	{
		aBtn[i].style.background='none';
	}
}

var nPagNow=0;
var aBtn=null;
window.onload=function ()
{
	//选项卡
	var aPbtn=document.getElementById('pages').children;
	play();
	function  play()
	{
		
	var oContain=document.getElementById('container');	
		var aSect=oContain.children;
		aBtn=document.getElementById('nav').children;	
		var nSeLight=aSect[0].offsetHeight;
		
		for(var i=0; i<aBtn.length; i++)
		{	
			(function (index){
				
				
					
					aBtn[i].onclick=function (){
						nPagNow=index;
						
						for(var i=0; i<aBtn.length; i++)
						{
							aBtn[i].style.background='none';
							aPbtn[i].classList.remove('active');
						}
						oContain.style.transition='all 1000ms ease';
						oContain.style.transform='translate3d(0px, -'+nSeLight*index+'px, 0px)';
						
						
						aPbtn[nPagNow].classList.add('active');
						//aBtn[nPagNow].style.background='rgba(255,255,255,0.8)';
					
					}
				
			})(i);
		}	
		
		
	}
	//html/css效果
	
	;(function (){
        var aLi=document.getElementById('content').children;
        var oOk=document.getElementById('ok');
        //拉钩效果
        function enter(obj){
		var oSpan=obj.getElementsByTagName('span')[0];
		obj.onmouseenter=function (ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);
			switch (n)
			{
				
				case 0:
					oSpan.style.left='200px';
					oSpan.style.top=0;
					break;
					
				case 1:
					oSpan.style.left=0;
					oSpan.style.top='200px';
					break;
				
				case 2:
					oSpan.style.left='-200px';
					oSpan.style.top='0';
					break;
					
				case 3:
					oSpan.style.left='0';
					oSpan.style.top='-200px';
					break;
			}
			
			move(oSpan, {top:0, left:0},{duration:500});
		};
	};
	function leave(obj){
		var oSpan=obj.getElementsByTagName('span')[0];
		obj.onmouseleave=function (ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);
			switch (n)
			{
				case 0:
					var left=200;
					var top=0;
					break;
					
				case 1:
					var left=0;
					var top=200;
					break;
				
				case 2:
					var left=-200;
					var top=0;
					break;
					
				case 3:
					var left=0;
					var top=-200;
					break;
			}
			
			move(oSpan, {top:top, left:left},{duration:500});
		};
	};
	
	
	function getN(obj, ev)
	{
		var pos=getPos(obj);
		var x1=pos.left+obj.offsetWidth/2-ev.clientX-getScrollLeft();
		var y1=pos.top+obj.offsetHeight/2-ev.clientY-getScrollTop();
		
		return Math.round((d2a(Math.atan2(y1, x1))+180)/90)%4;
	}
	
	function d2a(d)
	{
		return d*180/Math.PI;
	}
	
	
	function getPos(obj)
	{
		var left=0;
		var top=0;
		while(obj.id != 'section1')
		{
			 left += obj.offsetLeft;
			 top += obj.offsetTop;
			obj=obj.offsetParent;
		}
		return {left:left,top:top}
	}
	function getScrollLeft()
	{
		var l=document.documentElement.scrollLeft || document.body.scrollLeft;
		return l;
	}
	function getScrollTop()
	{	
		var t=document.documentElement.scrollTop|| document.body.scrollTop;
		return t;
	}
	for (var i=0; i<aLi.length; i++)
	{
		enter(aLi[i]);
		leave(aLi[i]);
	}
        

	/* 放大效果*/
       for(var i =0; i<aLi.length; i++)
        {
            aLi[i].onmouseover=function (){
                this.style.transform='scale(1.15)';
                this.style.zIndex=100;

            };
            aLi[i].onmouseout=function (){
                this.style.transform='scale(1)';
            };
        }
        /*                    */
        var aPos=[];
        //布局转换
        for(var i=0; i<aLi.length; i++)
        {
        	var top=aLi[i].offsetTop-330;
        	var left=aLi[i].offsetLeft;

        	aLi[i].style.left=left+'px';
        	aLi[i].style.top=top+'px';

        	aPos.push({left:left,top:top});
        }
        for(var i=0; i<aLi.length; i++)
        {
        	aLi[i].style.position='absolute';	
        	aLi[i].style.margin=0;
        }
        
		oOk.onclick=function (){
			for(var i=0; i<aLi.length; i++)
			{
				aLi[i].style.transform='translate3d(0,0,0)';
				aLi[i].style.WebkitTransform='translate3d(0,0,0)';
				aLi[i].style.MozkitTransform='translate3d(0,0,0)';
				aLi[i].style.width=0;
				aLi[i].style.height=0;
				aLi[i].style.opacity=0;
				aLi[i].style.transitionDelay=0.1*i+'s';
				aLi[8].addEventListener('transitionend',show,false);
				
			}

		};
		function show(){
					this.removeEventListener('transitionend',show,false);
					for(var i=aLi.length-1; i>-1;i--)
					{
						aLi[i].style.transform='translate3d('+aPos[i].left+','+aPos[i].top+','+'0)';
						aLi[i].style.WebkitTransform='translate3d('+aPos[i].left+','+aPos[i].top+','+'0)';
						aLi[i].style.MozkitTransform='translate3d('+aPos[i].left+','+aPos[i].top+','+'0)';
						aLi[i].style.width='200px';
						aLi[i].style.height='200px';
						aLi[i].style.opacity=1;
					}
					
				}
		









    })();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//js页面效果
	var oDiv=document.getElementById('automatic');
	
	var oPrevMask=getElementsByClassName(oDiv,'prev_div')[0];
	var oNextMask=getElementsByClassName(oDiv,'next_div')[0];
	
	var oPrevBtn=getElementsByClassName(oDiv,'prev')[0];
	var oNextBtn=getElementsByClassName(oDiv,'next')[0];
	
	var oPrevArrow=getElementsByClassName(oPrevBtn,'ico')[0];
	var oPrevArrowLight=getElementsByClassName(oPrevBtn,'ico1')[0];
	var oPrevTxt=getElementsByClassName(oPrevBtn,'txt')[0];
	
	var oNextArrow=getElementsByClassName(oNextBtn,'ico')[0];
	var oNextArrowLight=getElementsByClassName(oNextBtn,'ico1')[0];
	var oNextTxt=getElementsByClassName(oNextBtn,'txt')[0];
	
	oPrevArrow.alpha=100;
	var iInitPrevArrow=oPrevArrow.left=oPrevArrow.offsetLeft;
	oPrevArrowLight.alpha=0;
	var iInitPrevArrowLight=oPrevArrowLight.left=oPrevArrowLight.offsetLeft;
	oPrevTxt.alpha=0;
	var iInitPrevTxt=oPrevTxt.left=oPrevTxt.offsetLeft;
	
	oNextArrow.alpha=100;
	var iInitNextArrow=oNextArrow.left=oNextArrow.offsetLeft;
	oNextArrowLight.alpha=0;
	var iInitNextArrowLight=oNextArrowLight.left=oNextArrowLight.offsetLeft;
	oNextTxt.alpha=0;
	var iInitNextTxt=oNextTxt.left=oNextTxt.offsetLeft;
	
	var aLi=oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');
	
	var aLiInit=[];
	
	var oLine=getElementsByClassName(oDiv, 'line')[0];
	
	var iInterval=150;
	(function (){
		var oS=document.createElement('script');
			
		oS.type='text/javascript';
		oS.src='http://www.zhinengshe.com/zpi/zns_demo.php?id=3530';
			
		document.body.appendChild(oS);
	})();
	//var bIsIE=(/msie/i).test(window.navigator.userAgent);
	
	var i=0;
	
	for(i=0;i<aLi.length;i++)
	{
		aLiInit[i]={};
		aLi[i].width=aLiInit[i].w=aLi[i].getElementsByTagName('img')[0].offsetWidth;
		aLi[i].height=aLiInit[i].h=aLi[i].getElementsByTagName('img')[0].offsetHeight;
		aLi[i].left=aLiInit[i].l=aLi[i].offsetLeft;
		aLi[i].top=aLiInit[i].t=aLi[i].offsetTop;
		aLi[i].alpha=aLiInit[i].alpha=0;
		aLi[i].z=aLiInit[i].z=1;
	}
	
	for(i=0;i<aLi.length;i++)
	{
		aLi[i].style.position='absolute';
		aLi[i].style.left=aLiInit[i].l+'px';
		aLi[i].style.top=aLiInit[i].t+'px';
	}
	
	aLi[1].alpha=aLiInit[1].alpha=60;
	aLi[2].alpha=aLiInit[2].alpha=80;
	aLi[3].alpha=aLiInit[3].alpha=100;
	aLi[4].alpha=aLiInit[4].alpha=80;
	aLi[5].alpha=aLiInit[5].alpha=60;
	
	aLi[1].z=aLiInit[1].z=2;
	aLi[2].z=aLiInit[2].z=3;
	aLi[3].z=aLiInit[3].z=4;
	aLi[4].z=aLiInit[4].z=3;
	aLi[5].z=aLiInit[5].z=2;
	
	/*if(bIsIE)
	{
		oPrevArrowLight.style.display='none';
		oPrevArrow.style.display='block';
	}*/
	
	oPrevMask.onmouseover=function ()
	{
		/*if(bIsIE)
		{
			startMove(oPrevArrow, {left: iInitPrevArrow+10}, iInterval);
			startMove(oPrevTxt, {left: iInitPrevTxt-10, alpha:100}, iInterval);
		}
		else
		{
			startMove(oPrevArrow, {left: iInitPrevArrow+10}, iInterval);
			startMove(oPrevArrowLight, {left: iInitPrevArrowLight+10, alpha:100}, iInterval);
			startMove(oPrevTxt, {left: iInitPrevTxt-10, alpha:100}, iInterval);
		}*/
		startMove(oPrevArrow, {left: iInitPrevArrow+10}, iInterval);
		startMove(oPrevArrowLight, {left: iInitPrevArrowLight+10, alpha:100}, iInterval);
		startMove(oPrevTxt, {left: iInitPrevTxt-10, alpha:100}, iInterval);
	};
	
	oPrevMask.onmouseout=function ()
	{
		/*if(bIsIE)
		{
			startMove(oPrevArrow, {left: iInitPrevArrow}, iInterval);
			startMove(oPrevTxt, {left: iInitPrevTxt, alpha:0}, iInterval);
		}
		else
		{
			startMove(oPrevArrow, {left: iInitPrevArrow}, iInterval);
			startMove(oPrevArrowLight, {left: iInitPrevArrowLight, alpha:0}, iInterval);
			startMove(oPrevTxt, {left: iInitPrevTxt, alpha:0}, iInterval);
		}*/
		startMove(oPrevArrow, {left: iInitPrevArrow}, iInterval);
		startMove(oPrevArrowLight, {left: iInitPrevArrowLight, alpha:0}, iInterval);
		startMove(oPrevTxt, {left: iInitPrevTxt, alpha:0}, iInterval);
	};
	
	oPrevMask.onmousedown=function ()
	{
		gotoImg(true);
	};
	
	oNextMask.onmouseover=function ()
	{
		startMove(oNextArrow, {left: iInitNextArrow-10}, iInterval);
		startMove(oNextArrowLight, {left: iInitNextArrowLight-10, alpha:100}, iInterval);
		startMove(oNextTxt, {left: iInitNextTxt+10, alpha:100}, iInterval);
	};
	
	oNextMask.onmouseout=function ()
	{
		startMove(oNextArrow, {left: iInitNextArrow}, iInterval);
		startMove(oNextArrowLight, {left: iInitNextArrowLight, alpha:0}, iInterval);
		startMove(oNextTxt, {left: iInitNextTxt, alpha:0}, iInterval);
	};
	
	oNextMask.onmousedown=function ()
	{
		gotoImg(false);
	};
	
	function gotoImg(bLeft)
	{
		if(bLeft)
		{
			aLiInit.push(aLiInit.shift());
		}
		else
		{
			aLiInit.unshift(aLiInit.pop());
		}
		
		oLine.style.display='none';
		
		for(i=0;i<aLi.length;i++)
		{
			startMove(aLi[i], {left: aLiInit[i].l, top: aLiInit[i].t, width: aLiInit[i].w, height:aLiInit[i].h, alpha:aLiInit[i].alpha, zIndex:aLiInit[i].z}, 300, function (){oLine.style.display='block';});

		}
	};
};

function startMove(obj, oParams, iTime, fnCallBackEnd)
{
	var iInterval=45;
	var iEndTime=(new Date()).getTime()+iTime;
	var iTimes=Math.ceil(iTime/iInterval);
	var oSpeed={};
	
	if(typeof obj.timer=='undefined')
	{
		obj.timer=null;
	}
	
	for(key in oParams)
	{
		oSpeed[key]=(oParams[key]-obj[key])/iTimes;
	}
	
	if(obj.timer)
	{
		clearInterval(obj.timer);
	}
	obj.timer=setInterval
	(
		function ()
		{
			doMove(obj, oParams, oSpeed, iEndTime, fnCallBackEnd);
		}, iInterval
	);
}

function doMove(obj, oTarget, oSpeed, iEndTime, fnCallBackEnd)
{
	var iNow=(new Date()).getTime();
	
	if(iNow>=iEndTime)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		
		for(key in oTarget)
		{
			obj[key]=oTarget[key];
//			alert('set '+key+'='+oTarget[key]);
			switch(key)
			{
				case 'alpha':
					obj.style.opacity=oTarget[key]/100;
					obj.style.filter="alpha(opacity:"+oTarget[key]+")";
					break;
				case 'zIndex':
					obj.style.zIndex=oTarget[key];
					break;
				case 'width':
				case 'height':
					obj.getElementsByTagName('img')[0].style[key]=oTarget[key]+'px';
					break;
				default:
					obj.style[key]=oTarget[key]+'px';
					break;
			}
		}
		
		if(fnCallBackEnd)
		{
			fnCallBackEnd();
		}
	}
	else
	{
		for(key in oTarget)
		{
			obj[key]+=oSpeed[key];
			
			switch(key)
			{
				case 'alpha':
					obj.style.opacity=obj[key]/100;
					obj.style.filter="alpha(opacity:"+obj[key]+")";
					break;
				case 'zIndex':
					//obj.style.zIndex=obj[key];
					obj.style.zIndex=oTarget[key];

					break;
				case 'width':
				case 'height':
					obj.getElementsByTagName('img')[0].style[key]=obj[key]+'px';
					break;
				default:
					obj.style[key]=obj[key]+'px';
					break;
			}
		}
	}	
}


//h5
    ;(function (){
        var oLeft=document.querySelector('.up');  
        var oRight=document.querySelector('.down');
        var aLi=document.querySelectorAll('#ul1 li');
        
        //存class
        var aClass=[];
        for(var i=0; i<aLi.length; i++)
        {
            aClass[i]=aLi[i].className;
        }
        
        function tab()
        {
            for(var i=0; i<aLi.length; i++){
                aLi[i].className=aClass[i];
            }   
        }
        
        //左边
        oLeft.onclick=function()
        {
            
            aClass.unshift(aClass.pop());   
            
            tab();
        };
        
        //右面
        oRight.onclick=function()
        {
            aClass.push(aClass.shift()); 
             
            
            tab();
        };
    })();

	//全屏切换
	(function($){
	var defaults = {
		'container' : '#container',//容器
		'sections' : '.section',//子容器
		'easing' : 'ease',//特效方式，ease-in,ease-out,linear
		'duration' : 1000,//每次动画执行的时间
		'pagination' : true,//是否显示分页
		'loop' : false,//是否循环
		'keyboard' : true,//是否支持键盘
		'direction' : 'vertical',//滑动的方向 horizontal,vertical,
		'onpageSwitch' : function(pagenum){}
	};

	var win = $(window),
		container,sections;

	var opts = {},
		canScroll = true;

	var iIndex = 0;

	var arrElement = [];

	var SP = $.fn.switchPage = function(options){
		opts = $.extend({}, defaults , options||{});

		container = $(opts.container),
		sections = container.find(opts.sections);

		sections.each(function(){
			arrElement.push($(this));
		});

		return this.each(function(){
			if(opts.direction == "horizontal"){
			initLayout();
			}

			if(opts.pagination){
				initPagination();
			}

			if(opts.keyboard){
				keyDown();
			}
		});
	}

	//滚轮向上滑动事件
	SP.moveSectionUp = function(){
		if(nPagNow){
			nPagNow--;
		}else if(opts.loop){
			nPagNow = arrElement.length-1;
		}
		scrollPage(arrElement[nPagNow]);
		init();
		
	};

	//滚轮向下滑动事件
	SP.moveSectionDown = function(){
		
		if(nPagNow<(arrElement.length-1)){
			nPagNow++;
		}else if(opts.loop){
			nPagNow = 0;
		}
		scrollPage(arrElement[nPagNow]);
		init();
	};

	//私有方法
	//页面滚动事件
	function scrollPage(element){
		var dest = element.position();
		if(typeof dest === 'undefined'){ return; }
		initEffects(dest,element);
	}

	//重写鼠标滑动事件
	$(document).on("mousewheel DOMMouseScroll", MouseWheelHandler);
	function MouseWheelHandler(e) {
		e.preventDefault();
		var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
		var delta = Math.max(-1, Math.min(1, value));
		if(canScroll){
			if (delta < 0) {
				SP.moveSectionDown();
			}else {
				SP.moveSectionUp();
			}
		}
		return false;
	}

	//横向布局初始化
	function initLayout(){
		var length = sections.length,
			width = (length*100)+"%",
			cellWidth = (100/length).toFixed(2)+"%";
		container.width(width).addClass("left");
		sections.width(cellWidth).addClass("left");
	}

	//初始化分页
	function initPagination(){
		var length = sections.length;
		if(length){

		}
		var pageHtml = '<ul id="pages"><li class="active"></li>';
		for(var i=1;i<length;i++){
			pageHtml += '<li></li>';
		}
		pageHtml += '</ul>';
		$("body").append(pageHtml);
	}

	//分页事件
	function paginationHandler(){
		var pages = $("#pages li");
		pages.eq(nPagNow).addClass("active").siblings().removeClass("active");
	}

	//是否支持css的某个属性
	function isSuportCss(property){
		var body = $("body")[0];
		for(var i=0; i<property.length;i++){
			if(property[i] in body.style){
				return true;
			}
		}
		return false;
	}

	//渲染效果
	function initEffects(dest,element){
		var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
			transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];

		canScroll = false;
		if(isSuportCss(transform) && isSuportCss(transition)){
			var traslate = "";
			if(opts.direction == "horizontal"){
				traslate = "-"+dest.left+"px, 0px, 0px";
			}else{
				traslate = "0px, -"+dest.top+"px, 0px";
			}
			container.css({
				"transition":"all "+opts.duration+"ms "+opts.easing,
				"transform":"translate3d("+traslate+")"
			});
			container.on("webkitTransitionEnd msTransitionend mozTransitionend transitionend",function(){
				canScroll = true;
			});
		}else{
			var cssObj = (opts.direction == "horizontal")?{left: -dest.left}:{top: -dest.top};
			container.animate(cssObj, opts.duration, function(){
				canScroll = true;
			});
		}
		element.addClass("active").siblings().removeClass("active");
		if(opts.pagination){
			paginationHandler();
		}
	}

	//窗口Resize
	var resizeId;
	win.resize(function(){
		clearTimeout(resizeId);
		resizeId = setTimeout(function(){
			reBuild();
		},500);
	});

	function reBuild(){
		var currentHeight = win.height(),
			currentWidth = win.width();

		var element = arrElement[nPagNow];
		if(opts.direction == "horizontal"){
			var offsetLeft = element.offset().left;
			if(Math.abs(offsetLeft)>currentWidth/2 && nPagNow <(arrElement.length-1)){
				nPagNow ++;
			}
		}else{
			var offsetTop = element.offset().top;
			if(Math.abs(offsetTop)>currentHeight/2 && nPagNow <(arrElement.length-1)){
				nPagNow ++;
			}
		}
		if(nPagNow){
			paginationHandler();
			var cuerrentElement = arrElement[nPagNow],
				dest = cuerrentElement.position();
			initEffects(dest,cuerrentElement);
		}
	}

	//绑定键盘事件
	function keyDown(){
		var keydownId;
		win.keydown(function(e){
			clearTimeout(keydownId);
			keydownId = setTimeout(function(){
				var keyCode = e.keyCode;
				if(keyCode == 37||keyCode == 38){
					SP.moveSectionUp();
				}else if(keyCode == 39||keyCode == 40){
					SP.moveSectionDown();
				}
			},150);
		});
	}
})(jQuery);