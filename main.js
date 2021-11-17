let addToDoButton = document.getElementById("addToDo");
let ToDocontainer = document.getElementById("toDocontainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click',()=>{
    var paragraph = document.createElement('p');
    ToDocontainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    paragraph.classList.add(".paragraph-styling");

    //remmoving text area to blank field
    inputField.value = "";

    //Done the task line through
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration = 'line-through';
    });
    
    //remove the task by Double Click
    paragraph.addEventListener('dblclick',()=>{
        ToDocontainer.removeChild(paragraph);
    })

});