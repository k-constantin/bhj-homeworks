const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

tasksAdd.addEventListener('click', function(event) {
    event.preventDefault();
    if (taskInput.value.trim() !== '') {
        tasksList.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title">' + taskInput.value + '</div><a href="#" class="task__remove">&times;</a></div>');
        taskInput.value = '';
    }
    const taskRemove = document.querySelectorAll('.task__remove');
    taskRemove.forEach(item => {
        item.onclick = function() {
            item.closest('.task').remove();
        }
    })
})