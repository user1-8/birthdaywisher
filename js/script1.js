let now, dateArr, dest, dif, raw, sec, min, hour, days, birthday;


function viewWishClicked(){

  // show everything else
  document.querySelector('#viewWish').setAttribute('style', 'animation: none;');
  setTimeout(function(){
    document.querySelector('#viewWish').setAttribute('style', 'animation: none; transform: scale(1.5); opacity: 0;');
  },100);
  setTimeout(function(){
    document.querySelector('.coverer').setAttribute('style', 'transform: translateX(110%)');
    
    // play audio
    document.getElementById("myAudio").play();

    confetti.start();
		setTimeout(function(){
			confetti.alpha = 0.7;
		}, 5000);

  },800);

}


// below function accesses the url variables
const getUrlParams = (url) => {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1); 
	var vars = query.split('&adm;');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};

if(getUrlParams(window.location.href).m!=undefined && getUrlParams(window.location.href).zpw=="9f12aab23cd9ffd22b209bc90da2d" && getUrlParams(window.location.href).d!=undefined && getUrlParams(window.location.href).rn!=undefined && getUrlParams(window.location.href).cn!=undefined){
  birthday = getUrlParams(window.location.href).d;
  document.getElementById('name').innerHTML = getUrlParams(window.location.href).rn;
  document.querySelector('.byWhom .cname').innerHTML = getUrlParams(window.location.href).cn;
  document.querySelector('.msg_area .indication .cname').innerHTML = getUrlParams(window.location.href).cn;
  document.querySelector('.msg_area .msg').innerHTML = getUrlParams(window.location.href).m;
}else{
  window.location.href="index.html";
}







// all about timer starts here

function assignNowAndDest(){
  now = new Date(); //now time

    
  // taking value of date & time from input and entering that into the dest var

  if(birthday!=undefined){
    // dateArr = "2021-02-1".split('-');
    dateArr = birthday.split('-');
  }
  
  // conversion from string to int
  dateArr[0] = parseInt(dateArr[0], 10);
  dateArr[1] = parseInt(dateArr[1], 10);
  dateArr[2] = parseInt(dateArr[2], 10);

  dest = new Date(dateArr[0], dateArr[1]-1, dateArr[2], 0, 0); // -1 in month is becoz of getting months value 1-12 and js accepts 0-11 months


  // assignNowAndDest(); // execute function on page load



  dif = dest.getTime() - now.getTime();

  raw = Math.trunc(dif/1000);

  sec = raw%60;
  min = Math.trunc((raw/60)%60);
  hour = Math.trunc((raw/(60*60))%24);
  days = Math.trunc(raw/(60*60*24));


  // console.log(`${days} days ${hour} hours ${min} minutes ${sec} seconds`);
}
assignNowAndDest();

// now assigning values into GUI

const daysNum = document.getElementById('daysNum');
const hourNum = document.getElementById('hourNum');
const minNum = document.getElementById('minNum');
const secNum = document.getElementById('secNum');

function GUIassign(){
  daysNum.innerHTML = days;
  hourNum.innerHTML = hour;
  minNum.innerHTML = min;
  secNum.innerHTML = sec;
}

GUIassign(); // executing this function on page load

setInterval(function(){
  assignNowAndDest();
  GUIassign();
}, 1000);

// all about timer ends here




