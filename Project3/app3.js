let clock=document.querySelector('.clock-box');
setInterval(()=>{
    let date =new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);