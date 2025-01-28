const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box'); 

//Light mode
function LightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255/50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0/50%)';
  console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.remove('fa-moon');
  toggleIcon.children[1].classList.add('fa-sun');
  imageMode('light');
}

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
//Dark Mode
function DarkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0/50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255/50%)';
  console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
  imageMode('dark');
}

function switchTheme(event){
    const isChecked = event.target.checked; 
    console.log(isChecked);
if(isChecked){
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark');
    DarkMode();
  }else{
    document.documentElement.setAttribute('data-theme','light')
    localStorage.setItem('theme','light')
    LightMode();
  }
}
//Event Listener
toggleSwitch.addEventListener('change',switchTheme);

const currentTheme = localStorage.getItem('theme')
if(currentTheme){
console.log(currentTheme);
}


