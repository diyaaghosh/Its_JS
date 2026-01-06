function check(){
    let email=document.getElementById("main_box").value ;
    let pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(pattern.test(email)){
        document.getElementById("message").innerText="Valid Email Address";
    }
    else{
        document.getElementById("message").innerText="Invalid Email Address";
    }

}