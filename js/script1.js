let now, dateArr, dest, dif, raw, sec, min, hour, days, birthday;

if(window.location.host == "") document.getElementById('createNew').setAttribute('href', window.location.protocol+"//"+window.location.pathname.replace("/", "").replace('wish.html', 'index.html'));

else document.getElementById('createNew').setAttribute('href', window.location.protocol + "//" + window.location.host + '/birthdaywisher');


function viewWishClicked(){
  
  // show everything else
  document.querySelector('#viewWish').setAttribute('style', 'animation: none;');
  setTimeout(function(){
    document.querySelector('#viewWish').setAttribute('style', 'animation: none; transform: scale(1.5); opacity: 0;');
  },100);
  setTimeout(function(){
    document.querySelector('.coverer').setAttribute('style', 'transform: translateX(110%)');
    
    
    // only do below when today is birthday
    if(daysNum.innerHTML<=0 && hourNum.innerHTML<=0 && minNum.innerHTML<=0 && secNum.innerHTML<=0){
      
      // play audio
      document.getElementById("myAudio").setAttribute('controls','');
      document.getElementById("myAudio").play();

      confetti.start();
      setTimeout(function(){
        confetti.alpha = 0.7;
      }, 5000);

    }
    
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

if(getUrlParams(window.location.href).m!=undefined && getUrlParams(window.location.href).d!=undefined && getUrlParams(window.location.href).rn!=undefined && getUrlParams(window.location.href).cn!=undefined){
  birthday = getUrlParams(window.location.href).d;
  document.getElementById('name').innerHTML = getUrlParams(window.location.href).rn;
  document.querySelector('.byWhom .cname').innerHTML = getUrlParams(window.location.href).cn;
  document.querySelector('.msg_area .indication .cname').innerHTML = getUrlParams(window.location.href).cn;
  document.querySelector('.msg_area .msg').innerHTML = decodeURI(encodeURI(getUrlParams(window.location.href).m).replace(/%0A/g, '<br>'));
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




if(daysNum.innerHTML<=0 && hourNum.innerHTML<=0 && minNum.innerHTML<=0 && secNum.innerHTML<=0){
  // do the following when today is birthday
  document.querySelector('.timer').style.display = "none";
  document.querySelector('.inadvance').style.display = "none";
  document.querySelector('.bday6').style.display="none";
  document.querySelector('.bdayImages_overlay').style.display="none";
}else{
  document.querySelector('.coverer').style.display = "none";
  confetti.alpha = 0.1;
  confetti.start();
  for(var i=0; i<document.getElementsByClassName("showImg").length; i++){
    document.getElementsByClassName("showImg")[i].setAttribute('style','-webkit-filter: blur(18px); filter: blur(18px);');
  }
}


