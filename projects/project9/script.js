function generate(){
    let length=document.getElementById("length_box").value;
    let uppercheck=document.getElementById("upper").checked;
    let numbercheck=document.getElementById("numbers").checked;
    let symbolcheck=document.getElementById("special_char").checked;
    let lowers="abcdefghijklmnopqrstuvwxyz";
    let uppers="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers="0123456789";
    let symbols="!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let characters=lowers;
    if(uppercheck){
        characters+=uppers;
    }
    if(numbercheck){
        characters+=numbers;
    }
    if(symbolcheck){
        characters+=symbols;
    }
    let ans="";
    for(let i=0;i<length;i++){
    random_index=Math.floor(Math.random()*characters.length);
    ans+=characters[random_index];
    }
    document.getElementById("message").innerText="Generated Password : "+ans;
}
function reset(){
    document.getElementById("length_box").value="";
    document.getElementById("upper").checked=false;
    document.getElementById("numbers").checked=false;
    document.getElementById("special_char").checked=false;
    document.getElementById("message").innerText="Generated Password will be appeared Here !!";
}