let question_list = document.getElementById("question_options");
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

let question_list_child = question_list.children;
console.log(object[0].options);

let index = 0;
object[0].options.forEach(element => {
    
    let a = question_list_child[index]
    a.textContent = element;
    index += 1
    console.log(a);
    
});






let started_button = document.getElementById("started_button");
let question_box = document.getElementById("question_box");
started_button.addEventListener("click", function (event) {
    started_box.style.visibility = "collapse";
    question_box.style.visibility = "visible";

});
