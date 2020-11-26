//init code button listeners
for (let i = 1; i <= 4; i++) {
    var btn = `#code_btn_${i}`;
    document.querySelector(btn).addEventListener("click", () => {
        let pop = document.querySelector(getClassWindowByIndex(i));
        pop.style.display="block";
    });
}

//init code save button listeners
for (let i = 1; i <= 4; i++) {
    var btn = `#code_save_button_${i}`;
    document.querySelector(btn).addEventListener("click", () => {
        let pop = document.querySelector(getClassWindowByIndex(i));
        pop.style.display="none";
    });
}






function getClassWindowByIndex(index) {
    switch (index) {
        case 1:
            return '#code-input_1';
        case 2:
            return '#code-input_2';
        case 3:
            return '#code-input_3';
        case 4:
            return '#code-input_4';
    }
}