const sayHowdyBtn = document.querySelector('button[name="henlo"]');

function initial(event) {

  const sectionEl = document.querySelector('section');
  
}

 function sayHenlo() {
  alert('Hello!');
}

window.addEventListener('load', initial);

 sayHowdyBtn.addEventListener('click', sayHenlo);