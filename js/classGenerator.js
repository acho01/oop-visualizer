function generateClasses() {

    let dropdown = document.querySelector(".dropbtn");
    let chosen = dropdown.innerHTML;
     if (chosen == 'Dropdown') {
         dropdown.style.background= "red";
         dropdown.style.color= "black";
         dropdown.style.transform= "scale(1.2)";
         setInterval(() => {
                dropdown.style.background= "#ffe227";
                dropdown.style.color= "black";
                dropdown.style.transform= "scale(1.0)";
             }, 800);
     } else {
         let classMap = getClassMap();
         for (let i = 1; i <= 4; i++) {
             let clazz = classMap.get(chosen)[i-1];
             let code_btn = document.querySelector(`#code_btn_${i}`);
             let code_in = document.querySelector(`#code-input_${i}`);
             let text_area = code_in.querySelector('.code_area');
             text_area.innerHTML = clazz.content;
             code_btn.innerHTML = `${clazz.name}  [${clazz.type}]`;

         }
    }


}
