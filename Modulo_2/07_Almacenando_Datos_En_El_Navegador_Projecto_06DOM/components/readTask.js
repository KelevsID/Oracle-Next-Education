import { createTask } from './addTask.js';
import { uniqueDates, orderDates } from '../services/date.js';
import dateElement from './dateElement.js';


export const displayTasks = () => {
    const list = document.querySelector('[data-list]');
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDates(tasksList);

    orderDates(dates);

    dates.forEach((date) => {
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            // if (date === task.dateFormat) list.appendChild(createTask(task));    // sin usar moment
            if (diff === 0) {   // si la diferencia entre dateMoment y taskDAte es 0, es la misma fecha
                list.appendChild(createTask(task));
            }
        });
    });
};
