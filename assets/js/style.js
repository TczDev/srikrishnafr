window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled-header');
    } else {
      header.classList.remove('scrolled-header');
    }
  });

function audioFunction(){
  var pause_btn=document.getElementById("pause")
  var audio = document.getElementById('my_audio');



  // Play the audio when the page loads
  // audio.play() = function() {
  //   console.log('aa')
  //   // pause_btn.style.display = "block";
  //   play_btn.style.display = "none";
  // };

  pause_btn.style.display = "none";
}








function play(){
  var audio = document.getElementById('my_audio');
 
var play_btn=document.getElementById("play")

var pause_btn=document.getElementById("pause")

  play_btn.style.display = "none";
  pause_btn.style.display = "block";

  // Play the audio when the page loads
  audio.play();
}

function pause(){
  var audio = document.getElementById('my_audio');
  var pause_btn=document.getElementById("pause")
  var play_btn=document.getElementById("play")
  play_btn.style.display = "block";
  pause_btn.style.display = "none";

  // Play the audio when the page loads
  audio.pause();
}
