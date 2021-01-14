document.querySelector('.nav-bar').addEventListener("click", () => {
    let template = document.querySelector(".dropbtn").innerHTML;
    for (let i = 1; i <= 4; i++) {
        if (template !== 'Dropdown') {
            let clazz = getClassMap().get(template)[i-1];
            let btn = `#code_btn_${i}`;
            let btn_txt = document.querySelector(btn).innerHTML;

            if (clazz != null && btn_txt !== 'Add class') {
                let graph_block = document.querySelector(`#class_box_${i}`).querySelector("h1");
                graph_block.innerHTML = `${clazz.name} [${clazz.type}]`;
            }
        }
    }
});


let para = document.createElement("p");
let node = document.createTextNode("This is new.");
para.appendChild(node);

let element = document.getElementsByClassName("body");
element.appendChild(para);
