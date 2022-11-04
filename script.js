/* Add/remove responsive class to topnav */
function shrinkTopnav() {
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
