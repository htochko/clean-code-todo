/**
 * TODO-list application
 */

// Add Task form selectors
const createTaskInput = document.getElementById('new-task');
const addButton = document.querySelector('button[data-control-add-task]');
const todoTasksList = document.getElementById('incompleteTasks');
const completedTasksList = document.getElementById('completed-tasks');

//New task list item
const createNewTaskElement = function (taskString) {
  //input (checkbox)
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  //label
  const label = document.createElement('label');
  label.innerText = taskString;
  label.className = 'task';

  //input (task content)
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'task';

  //button.edit
  const editButton = document.createElement('button'); //edit button
  editButton.innerText = 'Edit';
  editButton.className = 'edit';

  //button.delete
  const deleteButton = document.createElement('button');
  const deleteButtonImg = document.createElement('img');
  deleteButton.className = 'delete';
  deleteButtonImg.src = './remove.svg';
  deleteButton.appendChild(deleteButtonImg);

  // Create li and append task html parts to it
  const listItem = document.createElement('li');
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};

//
// HANDLERS
//

const addTask = function () {
  //Prevent creation of empty tasks
  if (!createTaskInput.value) return;
  //Create a new list item with the text from the #new-task:
  const listItem = createNewTaskElement(createTaskInput.value);

  todoTasksList.appendChild(listItem);
  bindTaskEvents(listItem, handleTaskStateChange);

  createTaskInput.value = '';
};

// Editing an existing task.
const editTask = function () {
  const listItem = this.parentNode;

  const editInput = listItem.querySelector('input[type=text]');
  const label = listItem.querySelector('label');
  const editBtn = listItem.querySelector('.edit');
  const containsClass = listItem.classList.contains('editMode');
  //If class of the parent is .editmode
  if (containsClass) {
    //switch to .editmode
    //label becomes the inputs value.
    label.innerText = editInput.value;
    editBtn.innerText = 'Edit';
  } else {
    editInput.value = label.innerText;
    editBtn.innerText = 'Save';
  }

  //toggle .editmode on the parent.
  listItem.classList.toggle('editMode');
};

// Delete task.
const deleteTask = function () {
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  //Remove the parent list item from the ul.
  ul.removeChild(listItem);
};

const handleTaskStateChange = function () {
  const listItem = this.parentNode;
  const isCompleted = completedTasksList.contains(listItem);

  const targetList = isCompleted ? todoTasksList : completedTasksList;
  targetList.appendChild(listItem);

  const checkBox = listItem.querySelector('input[type=checkbox]');
  checkBox.onchange = handleTaskStateChange;
};

const bindTaskEvents = function (taskListItem) {
  //select ListItems children
  const checkBox = taskListItem.querySelector('input[type=checkbox]');
  const editButton = taskListItem.querySelector('button.edit');
  const deleteButton = taskListItem.querySelector('button.delete');

  //Bind editTask to edit button.
  editButton.onclick = editTask;
  //Bind deleteTask to delete button.
  deleteButton.onclick = deleteTask;
  //Bind taskCompleted to handleTaskStateChange.
  checkBox.onchange = handleTaskStateChange;
};

// BINDINGS

addButton.addEventListener('click', addTask);

Array.from(todoTasksList.children).forEach((item) => bindTaskEvents(item));
Array.from(completedTasksList.children).forEach((item) => bindTaskEvents(item));
