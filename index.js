let btn=document.querySelectorAll("button")

btn[0].addEventListener("click",playVideo)
function playVideo() {
    var video = document.getElementById('video');
    video.pause();
    btn[0].classList.toggle('stop')
    btn[1].classList.toggle('stop')
  }
  btn[1].addEventListener("click",stopVideo)
function stopVideo() {
    var video = document.getElementById('video');
    video.play();
    btn[0].classList.toggle('stop')
    btn[1].classList.toggle('stop')
  }