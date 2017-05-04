$(document).ready(function() {});
var cooljams = document.getElementById("maintheme");
var tardis1 = document.getElementById("tardis");
$(function() {
  $('td').on('mouseenter', function() {
    cooljams.pause();
    tardis1.pause();
  }).on('mouseleave', function() {
    cooljams.play();
  });
});
$(function() {
  $('div').on('mouseenter', function() {
    cooljams.pause();
    tardis1.pause();
  }).on('mouseleave', function() {
    cooljams.play();
  });
});
var audio = document.getElementById("tardis");
cooljams.pause();
audio.addEventListener("ended", function() {
  cooljams.play();
});

function bFunction() {
  document.getElementById("ecc").setAttribute("onmouseover", "document.getElementById('eccleston2').play()");
  document.getElementById("ecc").setAttribute("onmouseout", "document.getElementById('eccleston2').pause()");
  document.getElementById("ten").setAttribute("onmouseover", "document.getElementById('tennant2').play()");
  document.getElementById("ten").setAttribute("onmouseout", "document.getElementById('tennant2').pause()");
  document.getElementById("smi").setAttribute("onmouseover", "document.getElementById('smith2').play()");
  document.getElementById("smi").setAttribute("onmouseout", "document.getElementById('smith2').pause()");
  document.getElementById("cap").setAttribute("onmouseover", "document.getElementById('capaldi2').play()");
  document.getElementById("cap").setAttribute("onmouseout", "document.getElementById('capaldi2').pause()");
}

function aFunction() {
  document.getElementById("ecc").setAttribute("onmouseover", "document.getElementById('eccleston').play()");
  document.getElementById("ecc").setAttribute("onmouseout", "document.getElementById('eccleston').pause()");
  document.getElementById("ten").setAttribute("onmouseover", "document.getElementById('tennant').play()");
  document.getElementById("ten").setAttribute("onmouseout", "document.getElementById('tennant').pause()");
  document.getElementById("smi").setAttribute("onmouseover", "document.getElementById('smith').play()");
  document.getElementById("smi").setAttribute("onmouseout", "document.getElementById('smith').pause()");
  document.getElementById("cap").setAttribute("onmouseover", "document.getElementById('capaldi').play()");
  document.getElementById("cap").setAttribute("onmouseout", "document.getElementById('capaldi').pause()");
}
var backgroundMusic = document.getElementById('maintheme');
backgroundMusic.volume = 0.5;
var tennantMusic = document.getElementById('tennant');
tennantMusic.volume = 2;