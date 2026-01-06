function toggle(){
    let password=document.getElementById("main_box").type;
    let btns=document.getElementById("btn").innerText;
    if(password==="password"){
        document.getElementById("main_box").type="text";
        document.getElementById("btn").innerText="Hide";
    }
    else{
        document.getElementById("main_box").type="password"; // text format
        document.getElementById("btn").innerText="Show";
    }


}
