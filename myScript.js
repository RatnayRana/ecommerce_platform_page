var popupLink = document.getElementById("icon");

var popupWindow = document.getElementsByClassName("poppage");
popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow[0].style.display = "block";
  });