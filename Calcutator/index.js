// here we catch the elements from html id,class
let numberButtons = document.querySelectorAll(".numberButton");
let operatorButtons = document.querySelectorAll(".operator");
let display = document.getElementById("display");
let equalButton = document.querySelector(".equal");
let clearButton = document.querySelector(".clear");





numberButtons.forEach((button) => {

      button.addEventListener("click", () => {
          display.value += button.getAttribute("name");
    });

});


operatorButtons.forEach((button)=>{
  button.addEventListener("click",()=>{
    let  lastChar  =  display.value[display.value.length - 1];

    if(lastChar === "+" || lastChar === "-" || lastChar === "/" || lastChar === "*" || lastChar === "."){
        display.value += "";
    }
    else{
        display.value += display.value && button.getAttribute("name");  
    }
  })
})


// Event for - button
operatorButtons.forEach((button) => {
    if (button.getAttribute("name") === "-") {
        button.addEventListener("click", () => {
            if (display.value === "") {
                display.value += "-";
            }
        });
    }
});


  equalButton.addEventListener("click",()=>{

    let  lastChar  =  display.value[display.value.length - 1];

    if(lastChar === "+" || lastChar === "-" || lastChar === "/" || lastChar === "*"){

        display.value = display.value.slice(0, -1);
        display.value = eval(display.value) ? eval(display.value) : "";

    } else {
        const evaluate = eval(display.value);
        display.value = evaluate !== undefined ? evaluate : "";
    }
});





// clear 
clearButton.addEventListener("click", () => {
    display.value = "";
});
