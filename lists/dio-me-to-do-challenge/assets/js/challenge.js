var addTask = document.getElementById('create-task');
addTask.addEventListener('click', createTask);

function createTask() {
  var newTask = document.getElementById('new-task');
  if (newTask.value.length == 0) {
    window.alert("Você esqueceu de digitar a tarefa!")
  }
  
  else {
    document.querySelector('#list').innerHTML += `
    <br />
    <li class="task">
      <label for="check-task" class="check-box">
        <div class="task-info">
          <input type="checkbox" name="check-task" id="check-task" />
          <span class="checkmark"></span>
          <span class="task-txt">${newTask.value}</span>
        </div>
        <button class="delete">X</button>
      </label>
  </li>
  `;

  var current_tasks = document.querySelectorAll('.delete');
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function() {
      this.parentNode.remove();
    }
  }
  }
}