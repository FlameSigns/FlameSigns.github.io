var help  = document.getElementById('help');
var helpDiv = document.getElementById('helpDiv');
helpDiv.style.display = 'none';

function onclick(pDiv){
	var val = pDiv.style.display;
	if(val === 'none'){
		pDiv.style.display = 'block'; //display
	}
	else{
		pDiv.style.display = 'none'; //hide
	}
}

help.onclick = function() {
	onclick(helpDiv);
}