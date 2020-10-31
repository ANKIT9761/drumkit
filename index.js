for(var i=1;i<=7;i++){
document.querySelectorAll(".drum")[i-1].addEventListener("click",function(){
  var btn=this.innerHTML;
  makeSound(btn);
buttonAnimation(btn);
})
document.addEventListener("keypress",function(event){
  var key=event.key;
  makeSound(key);
  buttonAnimation(key);
})
function makeSound(key){
  switch (key) {
    case "w":
      var s=new Audio("sounds/tom-1.mp3");
      s.play();
      break;
    case "a":
    var s=new Audio("sounds/tom-2.mp3");
    s.play();
      break;
    case "s":
    var s=new Audio("sounds/tom-3.mp3");
    s.play();
      break;
    case "d":
    var s=new Audio("sounds/tom-4.mp3");
    s.play();
      break;
    case "j":
    var s=new Audio("sounds/crash.mp3");
    s.play();
      break;
    case "k":
    var s=new Audio("sounds/kick-bass.mp3");
    s.play();
      break;
    case "l":
    var s=new Audio("sounds/snare.mp3");
    s.play();
      break;
    default:console.log(key);


  }
}
function buttonAnimation(key){
  var active=document.querySelector("."+key);
  active.classList.add("pressed");
  setTimeout(function(){
    active.classList.remove("pressed");
  },150)
}
}
