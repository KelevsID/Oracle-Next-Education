import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';
(() => {
        // <ul class="cardsList">
        // <li class="card">
        //   <div>
        //     <i class="far fa-check-square icon"></i>
        //     <span class="task">Hacer curso de DOM</span>
        //   </div>
        //   <i class="fas fa-trash-alt trashIcon icon"></i>
        // </li>
    const btn = document.querySelector('[data-form-btn]');

    const createTask = (event) => {
        event.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';

        const taskContent = document.createElement('div');
        const titleTask = document.createElement('span');
        
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);


        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);

        setTimeout(() => { input.focus() }, 550);
    }

    btn.addEventListener('click', createTask);
})();