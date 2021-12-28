// Selector
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const alert1 = document.querySelector(".alert1");
const alert2 = document.querySelector(".alert2");
const alert3 = document.querySelector(".alert3");
const dangerBtn = document.querySelector(".clear");

// event listener
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// functions
function addTodo(event) {
  // off refreshing
  event.preventDefault();

  // todo div
  const todoDIv = document.createElement("div");
  todoDIv.classList.add("todo");

  // todo item
  const todoItem = document.createElement("li");
  todoItem.innerText = todoInput.value;
  todoItem.classList.add("todo-item");
  todoDIv.appendChild(todoItem);

  // check mark btn
  const markDiv = document.createElement("div");
  markDiv.classList.add("mark-div");

  // completed btn
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
  completedBtn.classList.add("complete-btn");
  todoItem.appendChild(completedBtn);

  // remove btn
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  trashBtn.classList.add("trash-btn");
  todoItem.appendChild(trashBtn);

  // mark div
  markDiv.append(completedBtn, trashBtn);
  todoDIv.appendChild(markDiv);

  // append all
  todoList.appendChild(todoDIv);
  todoInput.value = "";

  // DANGER BTN
  dangerBtn.classList.add("show-clear");
  dangerBtn.addEventListener("click", () => {
    todoDIv.remove();
    setTimeout(() => {
      dangerBtn.classList.remove("show-clear");
      displayAlert3('All task are Removed',null)
      alert3.classList.add("danger-alert3");
    },500);
  });
}
function deleteCheck(e) {
  const item = e.target;
  // check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement.parentElement;
    todo.classList.toggle("completed");
    setTimeout(() => {
      displayAlert('Task Completed',null)
      alert1.classList.add("show-alert1");
      alert1.style.display = none;
    }, 100);
  }
  // trash btn
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
      setTimeout((e) => {
        displayAlert2('Task Removed',null)
        alert2.classList.add("hide-alert2");
        alert2.style.display = none;
      },100);
    });
  }
}

function displayAlert(text, action) {
  alert1.textContent = text;
  alert1.classList.add(`alert1-${action}`);
  setTimeout(function () {
    alert1.textContent = "";
    alert1.classList.remove(`alert1-${action}`);
  },500);
}

function displayAlert2(text,action){
  alert2.textContent = text;
  alert2.classList.add(`alert2-${action}`);
  setTimeout(function () {
    alert2.textContent = "";
    alert2.classList.remove(`alert2-${action}`);
  },500);
}

function displayAlert3(text,action){
  alert3.textContent = text;
  alert3.classList.add(`alert3-${action}`);
  setTimeout(function () {
    alert3.textContent = "";
    alert3.classList.remove(`alert3-${action}`);
  },500);
}