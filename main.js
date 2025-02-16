let started_box = document.getElementById("started_box");
let started_button = document.getElementById("started_button");
let question_box = document.getElementById("question_box");
started_button.addEventListener("click", function (event) {
    started_box.style.visibility = "collapse";
    question_box.style.visibility = "visible";


});
let user_score = "";
let question_options = document.getElementById("question_options");
let question_buttons = question_options.getElementsByTagName("p");
function reaction (event) {
    for (let n = 0; n < question_buttons.length; n++) {
        question_buttons[n].style.border = "1px solid #dddddd";
        event.target.style.border = "1px solid #0659F3";
        
    }
}
question_but.addEventListener("click", function (event) {
    for (let j = 0; j < question_buttons.length; j++) {
        if (question_buttons[j].style.border = "1px solid #0659F3") {
            console.log("aaaaa");
            
    
        }
        
    }

    
})


