//Open and close navbar when user clicks on hamburger
function navFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.querySelector('.theme-div').classList.toggle('float-left');
  } else {
    x.className = "topnav";
    document.querySelector('.theme-div').classList.toggle('float-left');
  }
}

//Close nav when user clicks outside
document.addEventListener('mouseup', function (e) {
	var navcon = document.getElementById('topnav');
	if(!navcon.contains(e.target) && navcon.classList.contains('responsive')){
		navcon.className = "topnav";
    document.querySelector('.theme-div').classList.toggle('float-left');
	}
});

//Theme
var themeMode = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeMode.checked = true;
        // alert('dark');
    }
}

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      // alert('dark');
  }
  else {        
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      // alert('not dark');
  }    
}
themeMode.addEventListener('click', switchTheme, false);

//submit form
function formSub(form){
  event.preventDefault();
  var ripple = document.querySelector('form > div:nth-child(3)');
  ripple.classList.toggle('unsee');
  const payload = new FormData(form);
  fetch('https://api.web3forms.com/submit', {
    method: "post",
    body: payload,
  })
  .then(Array.from(form.elements).forEach(formElement => formElement.disabled = true))
  .then(res => res.json())
  .then(data => {
    if('success' in data){
      if(data['success'] === true){
        alert('Email received successfully! Thank you.');
        ripple.classList.toggle('unsee');
        Array.from(form.elements).forEach(formElement => formElement.disabled = false);
        window.location = '../#home';
      }else{
        alert('An error occured! Please try again');
        ripple.classList.toggle('unsee');
        Array.from(form.elements).forEach(formElement => formElement.disabled = false);
      }
    }else{
      alert('An error occured! Please try again');
      ripple.classList.toggle('unsee');
      Array.from(form.elements).forEach(formElement => formElement.disabled = false);
    }
  })
  .catch(err => console.log(err));
}
