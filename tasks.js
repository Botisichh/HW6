TASK1
// Для заданої HTML-сторінки - index.html коментар task1
// увійдіть у файл task1.js
// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку
//  і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
// Запустіть програму за допомогою Live Server
// перевірте виконання за допомогою команди node tests/task1.test.js

function changeCSS(){
    const text = document.getElementById('text');
    text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = 'Comic Sans MS';
}
===================================================
TASK2
// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//         
// Запустіть виконане завдання за допомогою Live Server 
// Перевірте виконання за допомогою команди node tests/task2.test.js
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

button1.onclick = () => {
    document.body.style.backgroundColor = 'blue';
}
button2.ondblclick = () => {
    document.body.style.backgroundColor = 'pink';
}
button3.onmouseover = () => {
    document.body.style.backgroundColor = 'brown';
}
=================================================
TASK3
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js


const button = document.getElementById('deleteButton');
const dropdown = document.getElementById('dropdown');
button.onclick = () => {
    const selectedOption = dropdown.options[dropdown.selectedIndex];
    if(selectedOption){
        selectedOption.remove();
    }
}
=================================================
TASK4
// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

const width = document.getElementById('widthValue');
const height = document.getElementById('heightValue');

width.textContent = window.innerWidth;
height.textContent = window.innerHeight;
