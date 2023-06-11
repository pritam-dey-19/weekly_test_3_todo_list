const inputtdl = document.querySelector(".textarea");
const buttontdl = document.querySelector(".buttoninput");
const listtdl = document.querySelector(".todolist");

function clickButton(e) {
  e.preventDefault();
  addTodo();
}

// adding todoList
function addTodo() {
  const itemall = document.createElement("div");
  itemall.classList.add("itemall");

  const item = document.createElement("p");
  item.classList.add("item");
  item.innerText = inputtdl.value;
  itemall.appendChild(item);

  if (inputtdl.value === "") return;

  const checkbutton = document.createElement("button");

  checkbutton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
  checkbutton.classList.add("check-button");
  itemall.appendChild(checkbutton);

  listtdl.appendChild(itemall);
  inputtdl.value = "";
}

// checking and delete todoList
function okdel(e) {
  const item = e.target;

  // check
  if (item.classList[0] === "check-button") {
    const todolist = item.parentElement;
    todolist.classList.toggle("checklist");
  }
}

buttontdl.addEventListener("click", clickButton);
listtdl.addEventListener("click", okdel);
