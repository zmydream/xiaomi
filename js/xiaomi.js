function shoppingShow() {
	var header_2 = document.getElementById("header_2");
	header_2.style.display='block';
}
function shoppingHide() {
	var header_2 = document.getElementById("header_2");
	header_2.style.display='none';
}
function listShow(display) {
	var search1 = document.getElementById('search1');
	search1.style.borderColor="#ff6800";
	var simg = document.getElementById('simg');
	simg.style.borderColor="#ff6800";
	var seh = document.getElementById('seh');
	seh.innerHTML = "";
	var inputsearch = document.getElementById('inputsearch');
	inputsearch.style.display = display;
	inputsearch.focus();
	var list = document.getElementById('searchlist');
	list.style.display = display;
	
}
function listHide(display) {
	var list = document.getElementById('searchlist');
	list.style.display = display;
	var inputsearch = document.getElementById('inputsearch');
	inputsearch.style.display = display;
}

function proHideall() {
	for(var i= 1;i <= 7; i++){
		var Odiv = document.getElementById('p'+i);
	  Odiv.style.display='none';
	}
}
function proShow1(a) {
	for(var i = 1; i <= 7; i++){
	  var aDiv=document.getElementById('p'+ i);
	  aDiv.style.display='none';
	}
    var oDiv = document.getElementById(a);
    oDiv.style.display='block';
}
// 左列表js
function porty (display, id) {
	var oDiv = document.getElementById(id);
	oDiv.style.display = display;
	console.log(id);
}



// function proShow () {
// 	var produce = document.getElementById('produce');
// 	var Opro = produce.getElementsByTagName('li');
//   var prohide = document.getElementById('prohide');
//   var Odiv = prohide.getElementsByTagName('div');
//   for (var i = 0; i < Odiv.length; i++) {
//     Opro[i].index = i + 1;
//     Opro[i].onmouseover = function() {
//     	for(var j = 0; j < Odiv.length; j++) {
//     		Odiv[j].style.display="none";
//     	}
//     	Odiv[this.index].style.display="block";
//     }
//   }
// }