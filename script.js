var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","dog");
input.setAttribute("placeholder","Breed Name");


var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.addEventListener("click",foo);

let images = document.createElement("div");
images.setAttribute("id","images");
let second = document.createElement("div");
second.setAttribute("id","second");

div.append(input,button,images,second);
document.body.append(div);

async function foo(){
    try {
    var res =document.getElementById("dog").value;
    var url=`https://dog.ceo/api/breed/${res}/images/random`;

    var result=await fetch(url);
    let result1=await result.json();

    console.log(result1);

    images.innerHTML=`<div><img src="${result1.message}"</div>`;
    second.innerHTML=`Status of the dog:${result1.status}`;

}
catch (err){
   console.log("No breed in this name");
}
}