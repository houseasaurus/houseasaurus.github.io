/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  console.log('togled');
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//For loading animation 
window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded"); 
});

// Header change style on scroll
window.onscroll = function() {scrollFunc()};

function scrollFunc() {
  if (document.body.scrollTop > 50) {
    document.getElementById("myTopnav").classList.add("active");
  } else {
    document.getElementById("myTopnav").classList.remove("active");
  }
}
