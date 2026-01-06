function solve(){
    let val=parseInt(document.getElementById("main_box").value);
    if (isNaN(val)) {
        document.getElementById("message").innerText = "Please enter a number";
        return;
    }
    var flag=true;
    if(val % 2==1){
        flag=false;
    }
    if (flag==true) {
        document.getElementById("message").innerText = "Even Number";
    } else {
        document.getElementById("message").innerText = "Odd Number";
    }
}