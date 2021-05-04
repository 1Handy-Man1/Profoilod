var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {//If the scroller don't move down, the navbar wont move
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-135px";//When the scroller move down, the navbar moving by -75 pixels up
}
prevScrollpos = currentScrollPos;
}

function myPyramidMode() {
    var element = document.body;
    element.classList.toggle("darkmode");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("darkmode");
}

function myCooSpinlMode() {
    var element = document.body;
    element.classList.toggle("darkmode2");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("darkmode2");
}

function mySpinMode() {
    var element = document.body;
    element.classList.toggle("darkmode3");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("darkmode3");
}

function myRiftMode() {
    var element = document.body;
    element.classList.toggle("darkmode4");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("darkmode4");
}

function mySpinRiftMode() {
    var element = document.body;
    element.classList.toggle("darkmode5");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("darkmode5");
}

function myRemoveButton() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
/* The answer code for the Puzzle is [smiley face, The, Find, Pattern] */
$('#Button1').on('click', function(){
    $('#img2').fadeToggle(1000);
    $('#img6').fadeToggle(1000);
    $('#img9').fadeToggle(1000);
})
$('#Button3').on('click', function(){
    $('#img1').fadeToggle(1000);
    $('#img2').fadeToggle(1000);
    $('#img4').fadeToggle(1000);
    $('#img6').fadeToggle(1000);
})
$('#Button2').on("click", function(){
    $('#img2').fadeToggle(1000);
    $('#img6').fadeToggle(1000);
    $('#img8').fadeToggle(1000);
});
$('#Button4').on("click", function(){
    $('#img3').fadeToggle(1000);
    $('#img5').fadeToggle(1000);
    $('#img7').fadeToggle(1000);
});