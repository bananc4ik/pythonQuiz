let question_option = document.querySelector('input[name ="radio_button"]:checked').value;
console.log(question_option);

let question_label = document.querySelectorAll("label");
let object = [
    {
        question:"Какая функция выводит что-либо в консоль?",
        options:["print()","log()","out()","printer()"],
        correct:0
    }
];

let question_number = 0;
let question_title = document.getElementById("question_title");
question_title.textContent = object[question_number].question;
let inputs = document.querySelectorAll("input");

let index = 0;
object[0].options.forEach(element => {
    
    let a = question_label[index]
    a.textContent = element;
    inputs[index].value = element;
    index += 1
    console.log(a);
    
});





let question_button = document.getElementById("question_but");
let started_button = document.getElementById("started_button");
let question_box = document.getElementById("question_box");
started_button.addEventListener("click", function (event) {
    started_box.style.visibility = "collapse";
    question_box.style.visibility = "visible";
});
question_button.addEventListener("click",function (event) {
    console.log(question_option);
    
    
})
