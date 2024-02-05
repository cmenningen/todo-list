const addForm = document.getElementById("add-form");
const todoList = document.getElementById("todo-list");
const descriptionInput = document.getElementById("description");

let state = {
  todos: [
    {
      id: "1",
      description: "Learn CSS",
      done: true,
    },
    {
      id: "2",
      description: "Learn HTML",
      done: false,
    },
    {
      id: "3",
      description: "Learn JS",
      done: false,
    },
  ],
};

function render() {
  todoList.innerHTML = "";

  state.todos.forEach((todo, i) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", (e) => {
      todo.done = !todo.done;

      render();
    });

    const todoText = document.createTextNode(todo.description);

    li.append(checkbox, todoText);

    todoList.append(li);
  });
}

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submit");

  const inputText = descriptionInput.value;

  const trimmedText = inputText.trim();

  state.todos.push({
    id: Date.now().toString(),
    description: trimmedText,
    done: false,
  });

  descriptionInput.value = "";
  render();
});

render();
