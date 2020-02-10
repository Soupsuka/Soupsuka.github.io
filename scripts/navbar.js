function hMenu(x) {
  x.classList.toggle("change");
}

function dropDown() {
  var y = document.getElementById("nav-links");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
