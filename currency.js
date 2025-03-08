const BASE_URL="https://v6.exchangerate-api.com/v6/1743be8d17c5300402d202b8/pair/USD/INR";

const dropdowns=document.querySelectorAll(".dropdown select");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
const btn=document.querySelector("form button");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }

select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
}
const updateExchangeValue=async ()=>{
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value="1";
    }
    
    const URL=`https://v6.exchangerate-api.com/v6/1743be8d17c5300402d202b8/pair/${fromCurr.value}/${toCurr.value}`;
  let response=await fetch(URL);
    let data= await response.json();
    let rate=data.conversion_rate;
    let finalAmount=amtVal*rate;

    msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`

}
const updateFlag=(element)=>{
    let currCode=element.value;
    let countrycode=countryList[currCode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
 };
 


btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeValue();
    
})
// window.addEventListener("load",()=>{
//     updateExchangeValue();
// });







