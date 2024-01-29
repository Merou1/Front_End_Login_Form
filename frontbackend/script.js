document.addEventListener("DOMContentLoaded", () => {
    // Your JavaScript code here


let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
const formContainer=document.querySelector(".formContainer");
let in1=document.getElementById("in1");
let in2=document.getElementById("in2");
let in3=document.getElementById("in3");
let h1=document.getElementById("h1");
const formShow=document.querySelector(".formShow");
const h4=document.getElementById("h4");
const buttons=document.getElementById("buttons");
const close=document.getElementById("closeForm");

b1.onclick= function(){
    buttons.style.rowGap="4px"
    h4.style.display="none"; 
    h4.style.pointerEvents="none"; 
    h1.innerHTML="Signin";
    in3.style.maxHeight="0";
    in3.style.border="0";
    in3.style.backgroundColor="white"

    b2.onclick=function(){
        buttons.style.rowGap="4px"
    h4.style.display="block"; 
    h4.style.pointerEvents="auto";
    h1.innerHTML="Signup";
    in3.style.maxHeight="35px";
    in3.style.border="1px solid";
    in3.style.backgroundColor="transparent"

    }
    
}
close.addEventListener("click",()=>{
    console.log("close button clicked");
    formContainer.classList.remove("show");

});


//0px 25px 50px -12px;  buttons hover rgb(117, 55, 161)
formShow.addEventListener("click", () => {
    console.log("loginBtn clicked");
    formContainer.classList.add("show");
});
});