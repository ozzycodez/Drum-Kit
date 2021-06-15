var numDumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numDumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var theInnerHtml = this.innerHTML;

    buttonAnimation(theInnerHtml);

    switch (theInnerHtml) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      default:
      console.log(theInnerHtml);

    }

  });

}



document.addEventListener("keydown", function(event) {

  var keyPressed = event;
  keyPressed = keyPressed.key;

  buttonAnimation(keyPressed);

  switch (keyPressed) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
    console.log(keyPressed);
  }
})


function buttonAnimation(theInput) {
  var activatedButton = document.querySelector("." + theInput)
  activatedButton.classList.add("pressed");
  setTimeout(function() {activatedButton.classList.remove("pressed");},100);

}
