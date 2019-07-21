const sectionEl = document.querySelector('section');
const sayHowdyBtn = document.querySelector('button[name="henlo"]');
const getCNJokeBtn = document.querySelector('button[name="joke"]');

 sayHowdyBtn.addEventListener('click', function sayHenlo(){
  alert('Hello!');
 
});
  


function getCNJoke() {
  const request = new XMLHttpRequest();
  request.open('get', 'http://api.icndb.com/jokes/random', true);
  request.responseType = 'json';
  request.onload = function() {
    sectionEl.querySelector('h1').innerHTML = request.response.value.joke;
  };
  request.send();
}

 getCNJokeBtn.addEventListener('click', getCNJoke);


