/* Find someone(character) */
var pageCounter = 1;

var characterContainer = document.getElementById("character-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://swapi.dev/api/people/' + pageCounter +'/.json');

ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
   ourRequest.send();
   pageCounter++;
  });

  function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
      htmlString += "<p>" + data[i].name + data[i].height + ".<p>"   }

     characterContainer.insertAdjacentHTML('beforeend', htmlString);
  }



/* Fetch Info for characters */
let button = document.querySelector('#button')
let name   = document.querySelector('#name')

function getInfo() {
  let randomNumber = Math.floor((Math.random() * 88) + 1)
  let apiUrl = 'http://swapi.dev/api/people/' + randomNumber
 
    axios.get(apiUrl).then(function(response){
      updateInfo(response.data)
  })
}
function updateInfo(data) {
  name.innerText = data.name
}

button.addEventListener('click', getInfo)








   
   
  
  
     

       
 
/*


function getInfo() {
  let randomNumber = Math.floor((Math.random() * 88) + 1)
  let apiUrl = 'https://swapi.dev/api/people/' + randomNumber


  
  
  let cache = new InMemoryCache;
  let link = new HttpLink;

 const client = new ApolloClient({


 })
    axios.get(apiUrl).then(function(response){
      updateInfo(response.data)
  })
 
}
function updateInfo(data) {
  name.innerText = data.name
}

button.addEventListener('click', getInfo)


