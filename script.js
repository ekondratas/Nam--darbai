let buttons = document.getElementsByTagName("button")
let setNumber2 = document.getElementById("setNumber2")
let count1 = document.getElementById("count1")
let count2 = document.getElementById("count2")
let setNumber = document.getElementById("setNumber")


setNumber2.addEventListener("click", function(){
    setNumber.innerText = setNumber2.value
});

buttons[0].addEventListener("click", function(){
    if(count2.innerText >= setNumber.innerText || count1.innerText >= setNumber.innerText) return count1.style.color ="green"
    count1.innerText++;
});

buttons[1].addEventListener("click", function(){
    if(count2.innerText >= setNumber.innerText || count1.innerText >= setNumber.innerText ) return count2.style.color ="red"
    count2.innerText++;
});

buttons[2].addEventListener("click", function (){
    count1.innerText = 0;
    count2.innerText = 0;
    input = 0;
    setNumber.innerText = input;
    setNumber2.value = input;
    count1.style.color = "#EAEAEA"
    count2.style.color = "#EAEAEA"
});


