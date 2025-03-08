const URL="https://cat-fact.herokuapp.com/facts/random";
let para=document.querySelector("#fpara");
let button=document.querySelector("#bton");

const getData=async()=>{
    console.log("Fetching Data");//fetch returns promises
 let response= await fetch(URL);//JSON format data 
console.log(response);
let data=await response.json();
// console.log(data.text);
 para.innerHTML=data.text;
}

 button.addEventListener("click",getData)
