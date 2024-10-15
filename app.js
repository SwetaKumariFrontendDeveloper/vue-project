const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ui');

function addGoal() {
const enteredElement = inputEl.value;
const listItemEl = document.createElement('li');
listItemEl.textContent = enteredElement;
listEl.appendChild(listItemEl);
inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal)
