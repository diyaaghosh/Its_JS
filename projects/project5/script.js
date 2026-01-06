let images = ["img1.png", "img2.png", "img3.png"];
let index = 0;
function back(){
 
    index--;
    if(index<0){
        index=2;
    }
    document.getElementById("slider").src=images[index];

}
function next(){
    
    index++;
    if(index>2){
        index=0;
    }
    document.getElementById("slider").src=images[index];
}