var i = 0;
var fn = 'paul john';
var ln = 'vigilia';
var speed = 200;

var first_name =  document.getElementById("firstName");
var last_name =  document.getElementById("lastName");

setTimeout(function () {
    typeWriter()
}, 3000);

function typeWriter() {
    if (i < fn.length) {
        first_name.innerHTML += fn.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}