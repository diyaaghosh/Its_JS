
function inc(){
    let val=parseInt(document.getElementById("main_box").innerText);
    console.log(val);
    val++;
    let incount=parseInt(document.getElementById("incnt").innerText);
    console.log(incount);
    incount++;
    document.getElementById("incnt").innerText=incount;
    document.getElementById("main_box").innerText=val;
}
function dec(){
    let val=parseInt(document.getElementById("main_box").innerText);
    console.log(val);
    val--;
    let decount=parseInt(document.getElementById("decnt").innerText);
    console.log(decount);
    decount++;
    document.getElementById("decnt").innerText=decount;
    document.getElementById("main_box").innerText=val;
}
