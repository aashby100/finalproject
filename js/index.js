var nav = responsiveNav(".nav-collapse");





// CONTACT PAGE
var i = 0;
var txt = 'thanks for dropping by!';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
