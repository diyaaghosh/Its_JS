
let sign='';
let i=0;
let arr=[0,0];function add(){
    sign = '+';
    console.log("Addition Selected");
    i = 1;
    document.getElementById("panel").innerText += ' + ';
}

function sub(){
    sign = '-';
    console.log("Subtraction Selected");
    i = 1;
    document.getElementById("panel").innerText += ' - ';
}

function mult(){
    sign = '*';
    console.log("Multiplication Selected");
    i = 1;
    document.getElementById("panel").innerText += ' X ';
}

function div(){
    sign = '/';
    console.log("Division Selected");
    i = 1;
    document.getElementById("panel").innerText += ' / ';
}
function clear1(){
    document.getElementById("panel").innerText = ' ';
    console.log("Cleared");
    arr = [0, 0];
    i = 0;
    sign = '';
}
function solve(){
    let item;

    if(sign == ''){
        alert("Please select an operation");
        return;
    }

    if(sign == '+'){
        item = arr[1] + arr[0];
    }
    else if(sign == '-'){
        item = arr[0] - arr[1];
    }
    else if(sign == '*'){
        item = arr[0] * arr[1];
    }
    else if(sign == '/'){
        if(arr[1] == 0){
            alert("Division by zero is not allowed");
            document.getElementById("panel").innerText = "Undefined";
            return;
        }
        item = arr[0] / arr[1];
    }

    document.getElementById("panel").innerText = item;

   
    arr = [0, 0];
    i = 0;
    sign = '';
}


function display(a){
    arr[i] = arr[i] * 10 + a;
    document.getElementById("panel").innerText += a;


}