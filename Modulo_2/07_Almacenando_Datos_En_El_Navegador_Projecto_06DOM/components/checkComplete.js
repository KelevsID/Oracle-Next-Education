const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event, id));

  return i;
};

const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  const tasksCheck = JSON.parse(localStorage.getItem('tasks'));
  const index = tasksCheck.findIndex( (item) => item.id === id );
  tasksCheck[index]['complete'] = !tasksCheck[index]['complete'];
  localStorage.setItem('tasks', JSON.stringify(tasksCheck));
};

export { checkComplete };
// export default checkComplete;
