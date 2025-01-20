
var i = 0;
var text = 'I graduated at Nueva Ecija University of Science and Technology. I took the course Bachelors of Science in Information Technology and I major in Database Application Programming.';
var speed = 50;
var message =  document.getElementById("text");

setTimeout(function () {
    typeWriter()
}, 7000);

function typeWriter() {
    if (i < text.length) {
        message.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
