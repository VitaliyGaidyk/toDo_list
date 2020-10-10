const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#addNewTask');
const tasklist = document.querySelector('#list-group');
const emptyItem = document.querySelector('#empty-list-item');


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = input.value;

    const taskHtml = `<li class="list-group-item d-flex justify-content-between">
						<span contenteditable="true" class="task-title">${taskText}</span>
						<div>
							<button type="button" data-action="ready" class="btn btn-light align-self-end">Готово</button>
							<button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
						</div>
                    </li>`;

    console.log(taskHtml);
    tasklist.insertAdjacentHTML('afterbegin', taskHtml);

})

function toggleEmptyListItem() {
    if (tasklist.children.length > 1) {

    }else{

    }
}