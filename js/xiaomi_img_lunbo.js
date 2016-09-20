//轮播图 自动加点击
var timer = null;
window.onload = function() {
	timer = setInterval(autoPlay, 3000);
	timer_singer = setInterval(autoPlay1, 5000);
}
function proShow2() {
	var s1 = document.getElementById('imgone').getAttribute("src").slice(8,9);
	// console.log(i);
	s1--;
	if (s1 < 1)
		s1 = 5;
	var oImg = document.getElementById('imgone').setAttribute("src", "images/s" + s1 + ".jpg");
	clearInterval(timer);
	timer = null;
	var oNav = document.getElementById('nav');
	var oLi = oNav.getElementsByTagName('li');
	for (var j = 0; j < oLi.length; j++) {
	  oLi[j].removeAttribute("class");
   	var x1 = s1 - 1;
	 	oLi[x1].setAttribute("class", "cur");
	 	console.log(x1);
  }
}

function nextShow() {
	var s1 = document.getElementById('imgone').getAttribute("src").slice(8,9);
	s1++;
	if (s1 > 5)
		s1 = 1;
	var oImg = document.getElementById('imgone').setAttribute("src", "images/s" + s1 + ".jpg");
	clearInterval(timer);
	timer = null;
	var oNav = document.getElementById('nav');
	var oLi = oNav.getElementsByTagName('li');
	for (var j = 0; j < oLi.length; j++) {
		oLi[j].removeAttribute("class");
		var x1 = s1 - 1;
		oLi[x1].setAttribute("class", "cur");
	}
	
}

function navShow(a) {
  document.getElementById('imgone').setAttribute("src", "images/s" + a + ".jpg");
  clearInterval(timer);
	timer = null;
  var oNav = document.getElementById('nav');
	var oLi = oNav.getElementsByTagName('li');
	for (var j = 0; j < oLi.length; j++) {
		oLi[j].removeAttribute("class");
		var x1 = a - 1;
		oLi[x1].className="cur";
	}
}

function autoPlay () {
	var s1 = document.getElementById('imgone').getAttribute("src").slice(8,9);
	s1++;
	if (s1 > 5)
		s1 = 1;
	var oImg = document.getElementById('imgone').setAttribute("src", "images/s" + s1 + ".jpg");
	var oNav = document.getElementById('nav');
	var oLi = oNav.getElementsByTagName('li');
	for (var j = 0; j < oLi.length; j++) {
	  oLi[j].removeAttribute("class");
   	var x1 = s1 - 1;
	 	oLi[x1].className = 'cur';
	 	console.log(x1);
  }
}

function hide(){
	clearInterval(timer);
	timer = null;		
}
function show(){
	timer = setInterval(autoPlay,3000);
}

//按钮点击切换图片
var timer_singer = null;
function left_sp () {
	var move = document.getElementById('Sp_prd1');
	var leftimg = document.getElementById('left_sp');
	move.style.left = "0px";
	changebtn();
	clearInterval(timer_singer);
	timer_singer = null;
}
function right_sp () {
	var move = document.getElementById('Sp_prd1');
	var rightimg = document.getElementById('right_sp');
	move.style.left = "-1230px";
	changebtn();
	clearInterval(timer_singer);
	timer_singer = null;
}
function changebtn() {
	var move = document.getElementById('Sp_prd1');
	var leftimg = document.getElementById('left_sp');
	var rightimg = document.getElementById('right_sp');
	if (move.style.left=="-1230px") {
		rightimg.removeAttribute("class","right_sp");
		rightimg.setAttribute("class", "right_disable");
		leftimg.removeAttribute("class","left_disable");
		leftimg.setAttribute("class", "left_sp");
	}
}
function actionnext() {
	timer_singer = setInterval(autoPlay1, 5000);
}
function actionstop() {
	clearInterval(timer_singer);
	timer_singer = null;
}
function autoPlay1() {
  var move = document.getElementById('Sp_prd1');
  if (move.style.left == "-1230px") {
  	move.style.left = "0px";
  	changebtn();
  }
  else {
  	move.style.left ="-1230px";
  	changebtn();
  }
}
//另一个点击切换图片
var time_width = 0
function graybjfive(btn) {
	var movewidth = 1237;
	var move = document.getElementById('graybjfive_2_1');
	if (btn.className.indexOf("_disables") == -1) {
        time_width += (btn.id == "left_sps"? -1:1);
        move.style.left = -(movewidth * time_width)+"px"; 
        btnEnable();
	}
}
//专门控制两个按钮的使用状态 
function btnEnable() {
	var oDiv = document.getElementById('graybjfive_2_1');
	var count = oDiv.getElementsByTagName('img').length;
	var btnleft = document.getElementById('left_sps');
    var btnright = document.getElementById('right_sps');
	if(time_width == 0){//如果向左移动个数=0,则禁用左按钮
	    btnleft.removeAttribute("class","left_sps");
      btnleft.setAttribute("class","left_disables");
	}
	else if((count-time_width)==1){//如果剩余li个数=4，禁用右
		btnright.removeAttribute("class","right_sps");
        btnright.setAttribute("class","right_disables");
	}
	else{//否则，两个都能用
        btnleft.removeAttribute("class","left_disables");
        btnleft.setAttribute("class","left_sps");
        btnright.removeAttribute("class","right_disables");
        btnright.setAttribute("class","right_sps");
	}
}
// function navchange(a) {
// 	var imgObj = document.getElementById(a); 
// 	imgObj.querySelector('img').setAttribute("src", "images/navleft.png");
// 	imgObj.querySelector('img').setAttribute("src", "images/lunleft.png");
// }
