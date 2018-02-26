var _1P  = document.getElementById('_1P');
var _PDiv = document.getElementById('_1PDiv');
_1PDiv.style.display = 'none';

var _2P  = document.getElementById('_2P');
var _2PDiv = document.getElementById('_2PDiv');
_2PDiv.style.display = 'none';

function onclick(pDiv){
	var val = pDiv.style.display;
	if(val === 'none'){
		pDiv.style.display = 'block'; //display
	}
	else{
		pDiv.style.display = 'none'; //hide
	}
}

_1P.onclick = function() {
	onclick(_1PDiv);
}

_2P.onclick = function() {
	onclick(_2PDiv);
}