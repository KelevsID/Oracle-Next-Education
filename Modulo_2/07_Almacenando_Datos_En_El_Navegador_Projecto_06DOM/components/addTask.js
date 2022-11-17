import { checkComplete } from './checkComplete.js';
import { deleteIcon } from './deleteIcon.js';


const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    
    input.value = '';
    calendar.value = "";
    
    const taskObj = {
        value,
        dateFormat
    }
    
    const taskList = JSON.parse(localStorage.getItem('task')) || [];
    taskList.push(taskObj)
    localStorage.setItem('task', JSON.stringify(taskList))

    const task = createTask(taskObj)
    list.appendChild(task);
}


const createTask = ({value, dateFormat}) => {
    const task = document.createElement('li');
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    const dateElement = document.createElement('span');
    task.classList.add('card');
    titleTask.classList.add('task');
    titleTask.innerText = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    dateElement.innerHTML = dateFormat;
    
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
};

export default addTask
