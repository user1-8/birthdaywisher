const btn = document.getElementById('btn_go');
const datepicker = document.querySelector('.datepicker');
const dateselector = document.getElementById('dateselector');

// below function is for closing the result
function closeResult(){
  document.querySelector('.result_wrapper').setAttribute('style', 'opacity:0; pointer-events: none;');
}






// below function copies the result link
function copyLink(r){
  /* Get the text field */
  var link = document.querySelector('.link');

  /* Select the text field */
  link.select();
  link.setSelectionRange(0, 9999999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  r.setAttribute('style', 'background:#05c46b;');
  r.innerHTML = ' Copied <i class="far fa-copy"></i>';
  setTimeout(function(){
    r.setAttribute('style', 'background:#4e16be;');
    r.innerHTML = ' Copy <i class="far fa-copy"></i>';
  }, 2000);
}



// below is onsubmit btn click
const letsgo = () => {
  
  setTimeout(function(){
    //document.querySelector('.page-transition').classList.add('animating-now');
  }, 900);
  

  // add url to the tag
  document.querySelector('.link').innerHTML = "wish.html?"+"m="+document.querySelector('.msg').value+"&"+"zpw=zpdskfdsffjklejzikwenkejwknoq"+"&"+"d=2021-"+document.getElementById('monthselector').value+"-"+document.getElementById('dateselector').value+"&"+"rn="+document.querySelector('.receivername').value+"&"+"cn="+document.querySelector('.creatorname').value;
  
  //set href of view btn to the link's value with the &amp; converted to &
  document.querySelector('.view').setAttribute('href', document.querySelector('.link').innerHTML.replace(/&amp;/g, '&'));

  // set href of whatsapp anchor tag
  document.querySelector('.whatsapp_share').setAttribute('href', 'whatsapp://send?text=Hi%20*'+document.querySelector('.receivername').value+'*%20😄,%0A%0AI%20have%20someting%20*very%20special%20for%20you*.%20😜%0A%20A%20special%20message%20is%20also%20there%20😏%20*written%20by%20me*.%20%0ACheck%20it%20out%20below%20😁😁%0A%0A👉'+document.querySelector('.link').innerHTML.replace(/&amp;/g, '&'));
  
  // show result
  setTimeout(function(){
    document.querySelector('.result_wrapper').setAttribute('style', 'opacity:1; pointer-events: auto;');
  }, 300);

}


const enable_btn = () => {

  let namerules=(/^[A-Za-z]+$/);
  let allnameright = document.querySelector('.receivername').value.length>1 && document.querySelector('.receivername').value.match(namerules) && document.querySelector('.creatorname').value.length>1 && document.querySelector('.creatorname').value.match(namerules);

  if(document.getElementById('dateselector').value!="" && document.getElementById('monthselector').value!="" && allnameright && document.querySelector('.msg').value.length>1){
    btn.removeAttribute('disabled', '');
  }else{
    btn.setAttribute('disabled', '');
  }
}

setTimeout(enable_btn, 500);




// below function is to be used by another function
function rmAndDates(n, action="rm"){
  if(action == 'rm'){
    for(var i=n; i<=31; i++){
      dateselector.children[i].style.display = 'none';
      // below removes eg. if one chose 31 first and then chose feb then... so that he cannot enter 31 in feb
      if(document.getElementById('dateselector').value == i){
        document.getElementById('dateselector').value = "";
      }
    }
  }

  if(action == 'add'){
    // below loop for changing display to normal for the others
    for(var j=(--n); j>=1; j--){
      dateselector.children[j].style.display = null;
    }
  }
}

editDates = (g) =>{

  rmAndDates(32, 'add');

  if(g.value == 2) rmAndDates(30)
  if(g.value == 4) rmAndDates(31)
  if(g.value == 6) rmAndDates(31)
  if(g.value == 9) rmAndDates(31)
  if(g.value == 11) rmAndDates(31)
  
}



