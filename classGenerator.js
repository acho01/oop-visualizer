function generateClasses() {

    let dropdown = document.querySelector(".dropbtn");
    let chosen = dropdown.innerHTML;
    if (chosen == 'Dropdown') {
        dropdown.style.background = "red";
        dropdown.style.color = "black";
        dropdown.style.transform = "scale(1.2)";
        setInterval(() => {
            dropdown.style.background = "#ffe227";
            dropdown.style.color = "black";
            dropdown.style.transform = "scale(1.0)";
        }, 800);
    } else {
        let classMap = getClassMap();
        for (let i = 1; i <= 4; i++) {
            console.log(classMap);
            console.log(chosen)
            console.log(classMap.get(chosen))
            let clazz = classMap.get(chosen)[i - 1];
            let code_btn = document.querySelector(`#code_btn_${i}`);
            let code_in = document.querySelector(`#code-input_${i}`);
            let text_area = code_in.querySelector('.code_area');
            text_area.innerHTML = clazz.content;
            code_btn.innerHTML = `${clazz.name}  [${clazz.type}]`;

        }
        clearGraphs();
        document.querySelector(".graph_container").querySelectorAll("h1").forEach(element => element.innerHTML='...');
    }

}

function clearGraphs() {
    let arrow1 = document.querySelector("#a2");
    let arrow2 = document.querySelector("#a1-2");
    let arrow3 = document.querySelector("#a4-2");
    arrow1.style = 'none;';
    arrow2.style = 'none;';
    arrow3.style = 'none;';
    let arrow4 = document.querySelector("#a1");
    let arrow5 = document.querySelector("#a2-2");
    let arrow6 = document.querySelector("#a4-2");
    let arrow7 = document.querySelector("#a3");
    arrow4.style = 'none;';
    arrow5.style = 'none;';
    arrow6.style = 'none;';
    arrow7.style = 'none;';

}
