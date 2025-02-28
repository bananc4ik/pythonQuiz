
let user_score = 0;
let question_label = document.querySelectorAll("label");
let object = [
    {
        question:"Какая функция выводит что-либо в консоль?",
        options:["print()","log()","out()","printer()"],
        correct:"print()"
    },
    {
        question:"Как объявить функцию?",
        options:["int add()","function()","def()","make_function"],
        correct:"def()"
    },
    {
        question:"Библиотека Pygame используется для...",
        options:["Физкультуры","Обучения нейросетей","Парсинга","Создания 2д игр"],
        correct:"Создания 2д игр"
    },
    {
        question:"Что выведет код? print(50 and 100) ",
        options:["50 100","50","100","Ни один из этих вариантов"],
        correct:"100"
    },
    {
        question:"Какая библиотека отвечает за время?",
        options:["localtime","clock","Time","time"],
        correct:"time"
    },
    {
        question:"Как получить данные от пользователя?",
        options:["Использовать метод get()","Использовать метод cin()","Использовать метод read()","Использовать метод input()"],
        correct:"Использовать метод input()"
    },
    {
        question:"Сколько библиотек можно импортировать в один проект?",
        options:["Не более 3","Неограниченное количество","Не более 23","Не более 10"],
        correct:"Неограниченное количество"
    },
    {
        question:"Где правильно создана переменная?",
        options:["num = float(2)","$num = 2","int num = 2","Нет подходящего варианта"],
        correct:"num = float(2)"
    },
    {
        question:"Какой из предложенных является оператором среза?",
        options:["[X]","[Y]","[X:Y]*","[X:Y]"],
        correct:"[X:Y]"
    }
    



];

let question_title = document.getElementById("question_title");
let inputs = document.querySelectorAll("input");
let question_number = 0;

function transition(question_number){
    let index = 0;

    question_title.textContent = object[question_number].question;
    object[question_number].options.forEach(element => {
        let b = question_label[index];
        b.textContent = element;
        inputs[index].value = element;
        inputs[index].checked = false;
        index += 1;
        console.log(b);
    
    
})
};

transition(question_number);



let victory_music = document.getElementById("victory_music");

let question_button = document.getElementById("question_but");
let started_button = document.getElementById("started_button");
let final_button = document.getElementById("final_but");

let final_box = document.getElementById("final_box");
let question_box = document.getElementById("question_box");

started_button.addEventListener("click", function (event) {
    started_box.style.display = "none";
    question_box.style.display ="block"
});
let user = document.getElementById("user_score");
function a() {
    question_button.addEventListener("click",function (event) {
        let question_option = document.querySelector('input[name ="radio_button"]:checked').value;
        console.log(question_option);
 
        if (question_number >= 8) {
            question_box.style.display = "none";
            question_button.style.display = "none";
            final_box.style.display = "flex";
            final_button.style.display = "block";
            console.log("Тест пройден");
            user.textContent = user_score +1;
            let profile_description = document.getElementById("profile_description");
    

            
            
        } else {
    
            if(question_option == object[question_number].correct){
                console.log("Ты большой молодец дай обниму ");
                
                
                user_score += 1;
                console.log(user_score);
                
    
            }else{
                console.log("Неправильно");    
            }   
            question_number += 1;
            transition(question_number); 
        }         
    });
    
};
a();






let retryButton = document.getElementById("retry_button");
retryButton.addEventListener("click",function (event) {
    question_number = 0;
    user_score = 0;
    index = 0;
    final_box.style.display = "none";
    started_box.style.display = "flex";
    final_button.style.display = "none";
    question_button.style.display = "block";
    transition(question_number);
    a();
 
});

