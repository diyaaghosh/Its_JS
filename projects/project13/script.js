function toFahrenheit(){
    let x=document.getElementById("celsius").value;
    let f=(x*9/5)+32;
    document.getElementById("fahrenheit").value=f;
}
function toCelsius(){
    let y=document.getElementById("fahrenheit").value;
    let c=(y-32)*5/9;
    document.getElementById("celsius").value=c;
}