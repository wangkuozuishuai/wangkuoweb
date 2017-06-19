 // var list = document.getElementById('list-right');
 // var iconmenu = document.getElementById('icon-menu');
 // var iconcross = document.getElementById('icon-cross');
 // var html = document.getElementById('html');
 // iconmenu.onclick=function()
 // {
 // 	list.style.display="block";
 // 	// html.style.background="rgba(0,0,0,0.2)"
 // 	hidebg.style.display="block";
 // 	hidebg.style.height=document.body.clientHeight+"px";
 // 	// hidebg.style.width=document.body.clientWidth-300+"px";
 // }
 // iconcross.onclick= hdhidebg;

 // function hdhidebg()
 // {
 // 	list.style.display="none";
 // 	hidebg.style.display="none";
 // }
window.onresize = function(){

 if(confirm('浏览器大小发生变化，为保证网页加载正常，是否刷新页面？'))
{window.location.href="index.html";}else{};};
$(function(){
	$('#icon-menu').bind('click',function(){

		$('#list-right').fadeIn();
		$('#hidebg').fadeIn();

	})
	$('#icon-cross').bind('click',dispear);
	$('#hidebg').bind('click',dispear);
	$('#list-right li').bind('click',dispear);
})
function dispear(){

		$('#list-right').fadeOut();
		$('#hidebg').fadeOut();

	}

window.onscroll = scrollpd;

function scrollpd(){
	var lastdiv = document.getElementById('lastdiv')
	var scrolltop=document.body.scrollTop;
	if(scrolltop>500)
	{
		lastdiv.style.display="block"

	}
	if(scrolltop<400)
	{
		lastdiv.style.display="none"

	}
}
window.onload=function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var pic = document.getElementById("pic");
	var foot = document.getElementById("foot");
	pic.style.height=window.innerHeight+'px';
	foot.style.height=window.innerHeight+'px';

		
		ctx.lineWidth=10;

		ctx.strokeStyle='white';
		ctx.beginPath();
	    ctx.lineCap="round";
		ctx.moveTo(20,160);
		ctx.lineTo(180,1100);
		ctx.closePath();
		
		ctx.stroke();
		ctx.strokeStyle='#089DB0';
		ctx.beginPath();
		ctx.moveTo(20,480);
		ctx.lineTo(180,780);
		ctx.closePath();
		
		ctx.stroke();
		ctx.strokeStyle='#29EF4B';
		ctx.beginPath();
		ctx.moveTo(20,1440);
		ctx.lineTo(180,160);
		ctx.closePath();
		
		ctx.stroke();

		ctx.strokeStyle='#E0893E';
		ctx.beginPath();
		ctx.moveTo(20,1130);
		ctx.lineTo(180,480);
		ctx.closePath();
		
		ctx.stroke();

		ctx.strokeStyle='black';
		ctx.beginPath();
		ctx.moveTo(20,810);
		ctx.lineTo(180,1440);
		ctx.closePath();
		
		ctx.stroke();

}//onload end
var weibo = document.getElementById('weibo');
var weixin = document.getElementById('weixin');
var qq = document.getElementById('qq');
function showbox(){
	weibo.style.display="block";
}
function noshowbox(){
	weibo.style.display="none";
}
function showbox1(){
	weixin.style.display="block";
}
function noshowbox1(){
	weixin.style.display="none";
}
function showbox2(){
	qq.style.display="block";
}
function noshowbox2(){
	qq.style.display="none";
}

