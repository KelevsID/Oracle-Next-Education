import { displayTasks } from './readTask.js';


export const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector('[data-list]');
  const tasksDelete = JSON.parse(localStorage.getItem('tasks'));
  const index = tasksDelete.findIndex(item => item.id === id);
  tasksDelete.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasksDelete));
  li.innerHTML = '';
  displayTasks();
};

// export default deleteIcon;
