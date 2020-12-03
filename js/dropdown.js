document.querySelector(".my-anchor").addEventListener("click", () => {
    alert("addad");
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onmousedown = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}