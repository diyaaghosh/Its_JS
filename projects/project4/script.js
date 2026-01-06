function check(){
    let text=document.getElementById("main_box").value;
    let temp=text;
    let high=temp.length-1;
    let low=0;;
    let flag=1;
    while(low<=high){
    if(temp[low]!=temp[high]){
        flag=0;
        break;

    }
    low++;
    high--;
    }
    if(flag==1){
        document.getElementById("message").innerText=" This is Palindrome";
    }
    else{
        document.getElementById("message").innerText=" This is not Palindrome";
    }
}