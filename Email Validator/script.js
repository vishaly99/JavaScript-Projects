let ApiKey="https://api.emailvalidation.io/v1/info?apikey=ema_live_sdZ7BFZq8EKbvf1B2Srgj83SlzDoPpkC0q8u43pF&email=";
let resultsCont=document.getElementById("resultsCont");

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "yennam20",
    "email": "yennam20@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

let str=``;



submitBtn.addEventListener("click",async (e)=>{
    e.preventDefault()
    console.log("Clicked!")
    resultsCont.innerHTML = `<img width="123" src="./loading.svg" alt="">`
    let email=document.getElementById("email").value;
    let res=await fetch(ApiKey+email)
    for(key of Object.keys(result)){
        str=str+`<div>${key}: ${result[key]}</div>`
    }
    resultsCont.innerHTML=str
})
