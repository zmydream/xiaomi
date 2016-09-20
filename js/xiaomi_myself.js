window.onload = function() {
	switching ('graybj_ul', 'graybjtwo_1_2');
	switching ('graybjthree_ul', 'graybjthree_1_2');
	switching ('graybjfour_ul', 'graybjfour_1_2');

	btnall_onclick ('#graybjseven_2_1_1','left_span_1', 'right_span_1');
	btnall_onclick ('#graybjseven_2_1_2','left_span_2', 'right_span_2');
	btnall_onclick ('#graybjseven_2_1_3','left_span_3', 'right_span_3');
	btnall_onclick ('#graybjseven_2_1_4','left_span_4', 'right_span_4');

  change_video();

	play_video('graybjeight_1_1','video_1', 'exit_1');
	play_video('graybjeight_1_2','video_2', 'exit_2');
	play_video('graybjeight_1_3','video_3', 'exit_3');
	play_video('graybjeight_1_4','video_4', 'exit_4');
}

function switching (a, b) {
	var oUl = document.getElementById(a);
	var oLi = oUl.getElementsByTagName("li");
	var oDiv1 = document.getElementById(b).children;
	for (var i = 0; i < oLi.length; i++) {
		// console.log(oLi.length+'li');
		// console.log(oDiv1.length+'span');
		oLi[i].index = i;
		oLi[i].onmouseover = function() {
			for(var j = 0; j < oDiv1.length; j++) {
			  oLi[j].className = "";
				oDiv1[j].style.display="none";
			}
			oLi[this.index].className='graycur';
			oDiv1[this.index].style.display = "block";
		}
	}
}

function btnall_onclick (a, b, c) {
	var i
  var width = 0;
	var oDiv = document.querySelector(a);
	var btnleft = document.getElementById(b);
	var btnright = document.getElementById(c);
  // true（禁用），false（不禁用）
  btnleft.disabled = true;
	btnright.onclick = function () {
    i = -295;
    width += i;
		oDiv.style.left = width + 'px';
		console.log(width +'left');
		if (width == -885) {
			console.log('-885');
			btnright.disabled = true;
		}
		else {
			btnright.disabled = false;
		}
		if(width != 0) btnleft.disabled = false;
	}
	btnleft.onclick = function () {
	  i = 295;
    width += i;
		oDiv.style.left = width + 'px';
		console.log(width+'right');
		if (width == 0) {
			btnleft.disabled = true;
		}
		else {
			btnleft.disabled = false;
		}
	  if (width != -885) btnright.disabled = false;
	} 
	oDiv.onmouseover = function () {
		btnleft.style.opacity = 1;
		btnright.style.opacity = 1;
	} 
	oDiv.onmouseout = function () {
		btnleft.style.opacity = 0;
		btnright.style.opacity = 0;
	} 
	btnleft.onmouseover = function () {
		btnleft.style.opacity = 1;
		btnright.style.opacity = 1;
	} 
	btnright.onmouseover = function () {
		btnleft.style.opacity = 1;
		btnright.style.opacity = 1;
	} 
}

 function change_video() {
	var oDiv = document.getElementById('graybjeight_1');
	var oLi =  oDiv.getElementsByTagName('img');
	for (var i = 0 ; i < oLi.length; i++) {
		oLi[i].index = i;
		oLi[i].onmouseover = function () {
      oLi[this.index].setAttribute('src', 'images/secs2 ('+ parseInt(this.index + 1) + ').png');
		}
		// oli[this.index].onclick = function() {
		// 	var video = document.getElementById('video_1');
	 //    var exit = document.getElementById('exit');
		// 	video.style.disp
		// }
		oLi[i].onmouseout = function () {
      oLi[this.index].setAttribute('src', 'images/secs1 ('+ parseInt(this.index + 1) +').png');
    }
	}	
 }

function play_video (a, b, c) {
	var img = document.getElementById(a);
	var video = document.getElementById(b);
	var exit = document.getElementById(c);
  img.onclick = function() {
  	video.style.display="block";
  	console.log('aaa');
  }
  exit.onclick = function() {
  	video.style.display="none";
  }

}

	