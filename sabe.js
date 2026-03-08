
document.getElementById("searchInput").addEventListener("keyup", function(){
    let value = this.value.toLowerCase();
    alert("Searching for: " + value);
});
function toggleMenu() {
  const links = document.getElementById("nav-links");
  links.classList.toggle("show-menu");
}

