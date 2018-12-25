var i = 0;
var j = 0;
var speed = 100;
var text1 = 'jeffrey wong';
var text2 = 'computer science & orie';

function type1() {
  if (i < text1.length) {
    document.getElementById("typewriter1").innerHTML += text1.charAt(i);
    i++;
  }
  setTimeout(type1, speed);
}

function type2() {
  if (j < text2.length) {
    document.getElementById("typewriter2").innerHTML += text2.charAt(j);
    j++;
  }
  setTimeout(type2, speed);
}

// var width = document.body.clientWidth;
// if (width <= 750) {
//   document.getElementsByClassName('.stats').width = 60%;
// }

document.getElementById("typewriter1").innerHTML = "";
document.getElementById("typewriter1").style.color = "black";
type1();
setTimeout(function() {
  var len = document.getElementById("typewriter1").innerHTML.length;
  if (len == text1.length) {
    document.getElementById("typewriter2").innerHTML = "";
    document.getElementById("typewriter2").style.color = "black";
    type2();
  }
}, 1500);
setTimeout(function() {
  var len = document.getElementById("typewriter2").innerHTML.length;
  if (len == text2.length) {
    document.getElementById("typewriter2").style.color = "orange";
    document.getElementById("typewriter2").innerHTML += "_";
  }
}, 6000);
// setTimeout(function() {
//   var len = document.getElementById("typewriter2").innerHTML.length;
//   if (len == text2.length) {
//     var underscore = document.getElementById("typewriter2").innerHTML.value.charAt(len-1);
//     setInterval(function() {
//       underscore.style.display = (underscore.style.display == 'none' ? '' : 'none');
//     }, 1000);
//   }
// }, 10000);
