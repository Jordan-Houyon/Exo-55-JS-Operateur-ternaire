let paragraphe=document.querySelector("p");

let mySpan= document.querySelectorAll("span");

let theLast= document.getElementById("resultat");

console.log(paragraphe);
console.log(mySpan);
console.log(theLast);

let result;

for(let a= 0 ; a< mySpan.length; a++){
    mySpan[a].innerText = a.toString();
}
mySpan[0].innerText= "5";
mySpan[1].innerText= "12";

if(mySpan[0].innerText==="5" && mySpan[1].innerText <="12"){
    result=(5+12);
}

if (result -10 <=10){
    mySpan[0].innerText= "Attention";
    mySpan[0].style.background="blue";
}

// ci dessous le ternaore
// theLast.innerHTML = (mySpan[0].innerText ==="5" && mySpan[1].innerText <=12)

