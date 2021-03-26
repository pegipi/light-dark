const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
 
 
let toggleKey = false;
let mode = [];
 
// Toggle Mode Styles
function toggleMode () {
  toggleKey = !toggleKey;
  if (toggleKey) {
    mode = ['dark', 'rgb(0 0 0 / 50%)', 'rgb(255 255 255 / 50%)', 'fa-sun', 'fa-moon'];
  } else {
    mode = ['light', 'rgb(255 255 255 / 50%)', 'rgb(0 0 0 / 50%)',  'fa-moon', 'fa-sun',];
  }
 
  document.documentElement.setAttribute('data-theme', mode[0]);
  nav.style.backgroundColor = mode[1];
  textBox.style.backgroundColor = mode[2];
  toggleIcon.children[0].textContent =  mode[0] + ' Mode';
  toggleIcon.children[1].classList.replace(mode[3], mode[4]);
  image1.src = `img/undraw_proud_coder_${mode[0]}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode[0]}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode[0]}.svg`;
}
 
// Event Listener
toggleSwitch.addEventListener('change', toggleMode);