function change(){
let mode=document.getElementById("btn").innerText;
document.body.classList.toggle("dark");
//document.body.classList.toggle("light");
if(mode=="dark"){
    document.getElementById("btn").innerText="Light";
    
}
else{
    document.getElementById("btn").innerText="dark";
   
}
}