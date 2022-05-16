let addTaskBtn = document.getElementById('addTask');
let tasksList = document.getElementById('tasks-list');
let inputField = document.getElementById('inputfield');

addTaskBtn.addEventListener('click', function(){
  if (inputField.value != "") {
    var listItem = document.createElement('li');
    listItem.classList.add('li-styling');
    listItem.innerText = inputField.value;
    tasksList.appendChild(listItem);
    inputField.value = "";

    listItem.addEventListener('click', function(){
      (listItem.style.textDecoration == "line-through red") ? listItem.style.textDecoration = "underline" : listItem.style.textDecoration = "line-through red";
    })

    listItem.addEventListener('dblclick', function(){
      tasksList.removeChild(listItem);
    })
  }
})