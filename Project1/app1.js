const body=document.querySelector("body");

let buttons=document.querySelectorAll(".button");

buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        let color=button.getAttribute("id");
        body.style.backgroundColor=color;
        setTimeout(()=>{
            body.style.backgroundColor='white';
        },250);
    })
})