// =======================
// Todo List script.js
// =======================

// ---- Data (parallel arrays) ----
let todoTasks = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];
let todoTasksImportant = [false, false];
let todoTasksDueDates = ["2025-10-05", "2025-10-10"];

// ---- Add a new task ----
const addTask = () => {
  const newTaskInput = document.getElementById("new-task-text");
  const newDateInput = document.getElementById("new-task-date");

  if (!newTaskInput) return; // safety if html differs
  const text = newTaskInput.value.trim();
  const date = newDateInput ? newDateInput.value : "";

  if (text) {
    todoTasks.push(text);
    todoTasksStatus.push(false);
    todoTasksImportant.push(false);
    todoTasksDueDates.push(date || "");
    newTaskInput.value = "";
    if (newDateInput) newDateInput.value = "";
    updateTodoList();
  }
};

// ---- Update the DOM ----
const updateTodoList = () => {
  const todoList = document.getElementById("todo-list");
  if (!todoList) return;
  todoList.innerHTML = "";

  for (const [index, task] of todoTasks.entries()) {
    const itemEl = createNewTodoItemElement(task, index);
    todoList.appendChild(itemEl);
  }
};

// ---- Create a single todo <li> element ----
const createNewTodoItemElement = (task, index) => {
  // Task text
  const textEl = document.createElement("p");
  textEl.innerText = task;
  textEl.style.margin = "0 8px 0 0";

  if (todoTasksStatus[index]) textEl.classList.add("complete");
  if (todoTasksImportant[index]) textEl.classList.add("important");

  // Due date (small label)
  const dueEl = document.createElement("span");
  dueEl.style.marginRight = "8px";
  if (todoTasksDueDates[index]) {
    dueEl.innerText = `Due: ${todoTasksDueDates[index]}`;
  }

  // <li> wrapper
  const li = document.createElement("li");
  li.appendChild(textEl);
  li.appendChild(dueEl);

  // Buttons container is the <li> itself (they are appended on the right)
  // Completed toggle
  const completeBtn = document.createElement("input");
  completeBtn.type = "button";
  completeBtn.value = "Completed";
  completeBtn.title = "Toggle complete";
  completeBtn.onclick = () => toggleComplete(index);
  li.appendChild(completeBtn);

  // Important toggle
  const importantBtn = document.createElement("input");
  importantBtn.type = "button";
  importantBtn.value = "Important";
  importantBtn.title = "Toggle important";
  importantBtn.onclick = () => toggleImportant(index);
  li.appendChild(importantBtn);

  // Delete
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "Delete";
  deleteBtn.title = "Delete task";
  deleteBtn.onclick = () => deleteTask(index);
  li.appendChild(deleteBtn);

  // Move Up
  const upBtn = document.createElement("input");
  upBtn.type = "button";
  upBtn.value = "⬆";
  upBtn.title = "Move up";
  upBtn.onclick = () => moveTaskUp(index);
  upBtn.disabled = index === 0; // disable if first item
  li.appendChild(upBtn);

  // Move Down
  const downBtn = document.createElement("input");
  downBtn.type = "button";
  downBtn.value = "⬇";
  downBtn.title = "Move down";
  downBtn.onclick = () => moveTaskDown(index);
  downBtn.disabled = index === todoTasks.length - 1; // disable if last item
  li.appendChild(downBtn);

  return li;
};

// ---- Toggles & actions ----
const toggleComplete = (index) => {
  if (index < 0 || index >= todoTasksStatus.length) return;
  todoTasksStatus[index] = !todoTasksStatus[index];
  updateTodoList();
};

const toggleImportant = (index) => {
  if (index < 0 || index >= todoTasksImportant.length) return;
  todoTasksImportant[index] = !todoTasksImportant[index];
  updateTodoList();
};

const deleteTask = (index) => {
  if (index < 0 || index >= todoTasks.length) return;
  todoTasks.splice(index, 1);
  todoTasksStatus.splice(index, 1);
  todoTasksImportant.splice(index, 1);
  todoTasksDueDates.splice(index, 1);
  updateTodoList();
};

const moveTaskUp = (index) => {
  if (index <= 0) return;
  swapTasks(index, index - 1);
  updateTodoList();
};

const moveTaskDown = (index) => {
  if (index >= todoTasks.length - 1) return;
  swapTasks(index, index + 1);
  updateTodoList();
};

// ---- Swap helper (FIXED) ----
const swapTasks = (i, j) => {
  // swap task text
  [todoTasks[i], todoTasks[j]] = [todoTasks[j], todoTasks[i]];
  // swap status (fix: swapped with the correct array)
  [todoTasksStatus[i], todoTasksStatus[j]] = [todoTasksStatus[j], todoTasksStatus[i]];
  // swap important
  [todoTasksImportant[i], todoTasksImportant[j]] = [todoTasksImportant[j], todoTasksImportant[i]];
  // swap due dates
  [todoTasksDueDates[i], todoTasksDueDates[j]] = [todoTasksDueDates[j], todoTasksDueDates[i]];
};

// ---- Initialize ----
updateTodoList();