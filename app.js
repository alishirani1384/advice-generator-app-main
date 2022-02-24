const button=document.getElementById("ad-genrator");
const advise=document.getElementById("advise");
const id=document.getElementById("id-num");

function api(){
    fetch("https://api.adviceslip.com/advice")
    .then(res=>res.json())
    .then(data=>{
        advise.innerHTML=`${data.slip.advice}`
        id.innerHTML=`ADVICE #${data.slip.id}`
    })
    
}
button.addEventListener("click",api)
    
