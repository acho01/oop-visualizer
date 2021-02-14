
for (let i = 1; i <=2 ; i++) {
    document.querySelector(`#my-anchor-${i}`).addEventListener("click", () => {
        let chosen = document.querySelector(`#my-anchor-${i}`).innerHTML;
        document.querySelector('.dropbtn').innerHTML=chosen;
        hideDrop();
    });
}

function showDrop() {
    document.querySelector(".dropdown-content").style.display="block";

    // document.getElementById("myDropdown").classList.toggle("show");
}

function hideDrop() {
    document.querySelector(".dropdown-content").style.display="none";
}
