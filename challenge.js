document.addEventListener("DOMContentLoaded", function(){

let counter = document.querySelector("#counter");

let timer = window.setInterval(counter1, 1000)
let counterObj = {}

  function counter1(){
      counter.innerText++
      counterObj[counter.innerText] = 0
      console.log(counterObj)


    }

let body = document.querySelector("body");

let numberLiked = document.createElement("p");
let timesLiked = document.createElement("p");
body.appendChild(numberLiked)
body.appendChild(timesLiked)

body.addEventListener("click",function(event){
  if (event.target.id === '-'){
    counter.innerText--
    } else if (event.target.id === '+'){
      counter.innerText++
    } else if (event.target.id === '<3' ){
      let lastKey = Object.keys(counterObj).slice(-1)[0]

      counterObj[lastKey]++

      numberLiked.innerText = counter.innerText
      timesLiked.innerText = counterObj[numberLiked.innerText]
    }

  })



});
//
// <button id='-' > ➖ </button>
// <button id='+' > ➕ </button>
// <button id='<3' > ❤️ </button>
// <button id='pause' > pause </button>
//
