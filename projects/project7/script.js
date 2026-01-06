function generate(){
    let text=document.getElementById("main_box").value;
    console.log(text);
    let ans=text.charCodeAt(0);
    document.getElementById("message").innerText="Unicode of "+text+" is: "+ans;
}