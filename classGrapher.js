document.querySelector('.nav-bar').addEventListener("click", () => {
    let template = document.querySelector(".dropbtn").innerHTML;
    for (let i = 1; i <= 4; i++) {
        if (template !== 'Dropdown') {
            let clazz = getClassMap().get(template)[i-1];
            let btn = `#code_btn_${i}`;
            let btn_txt = document.querySelector(btn).innerHTML;

            let box_txt;
            let graph_block = document.querySelector(`#class_box_${i}`).querySelector("h1");
            if (clazz != null && btn_txt !== 'Add class') {
                graph_block.innerHTML = `${clazz.name} [${clazz.type}]`;
                box_txt = `${clazz.name} [${clazz.type}]`;
                drawArrows(template);
            } else if (btn_txt === 'Add class'){
                box_txt = `...`;
            }
            graph_block.innerHTML = box_txt;

        }
    }
});



