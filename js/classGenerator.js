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
             }, 500);
     } else {
         let classMap = getClassMap();
         let code_btn = document.querySelector('#code_btn_1');
         let code_in = document.querySelector('#code-input_1');
         let text_area = code_in.querySelector('.code_area');
         let car = classMap.get(chosen)[0];
         text_area.innerHTML = car.content;
         code_btn.innerHTML = `${car.type}: ${car.name}`;
    }


}
