var numOfDrum=document.querySelectorAll(".drum").length;
for(var i=0; i<numOfDrum; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
});
}
document.addEventListener("keypress",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
    });
function makeSound(buttonIn){
    switch(buttonIn){
        case'w':
        var w=new Audio('sounds/crash.mp3');
        w.play();
        break;
        case'a':
        var a=new Audio('sounds/kick-bass.mp3');
        a.play();
        break;
        case's':
        var s=new Audio('sounds/snare.mp3');
        s.play();
        break;
        case'd':
        var d=new Audio('sounds/tom-1.mp3');
        d.play();
        break;
        case'j':
        var j=new Audio('sounds/tom-2.mp3');
        j.play();
        break;
        case'k':
        var k=new Audio('sounds/tom-3.mp3');
        k.play();
        break;
        case'l':
        var l=new Audio('sounds/tom-4.mp3');
        l.play();
        break;
        default:
            console.log("nothing");
            break;
    }
}
function buttonAnimation(currentbut){
 var activetime=document.querySelector("."+currentbut);
 activetime.classList.add("pressed");
 setTimeout(function() {
    activetime.classList.remove("pressed");
 }, 100);
}