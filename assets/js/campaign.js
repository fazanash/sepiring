const closeButton = document.getElementById("closePopup");
const popupAds = document.getElementById("popupAds");

closeButton.addEventListener("click", hidePopup);
function hidePopup() {
    popupAds.style.display = "none";
}