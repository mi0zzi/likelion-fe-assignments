const input = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');

const allBtn = document.querySelector('#allBtn');
const doneBtn = document.querySelector('#doneBtn');
const notDoneBtn = document.querySelector('#notDoneBtn');

let todos = [];
let currentFilter = 'all';
let nextId = 1;


function delayAdd(todo) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(todo);
    }, 500);
  });
}


function renderList() {

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  let items = todos;

  if (currentFilter === 'done') {
    items = todos.filter(function (todo) {
      return todo.done === true;
    });
  }

  if (currentFilter === 'notDone') {
    items = todos.filter(function (todo) {
      return todo.done === false;
    });
  }

  items.forEach(function (todo) {

    const li = document.createElement('li');
    li.dataset.id = todo.id; 

    const span = document.createElement('span');
    span.textContent = todo.text;

    if (todo.done) {
      span.classList.add('done');
    }

    const editBtn = document.createElement('button');
    editBtn.textContent = '수정';

    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제';

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}


addBtn.addEventListener('click', async function () {

  const value = input.value.trim(); 
  if (value === '') return;

  const newTodo = {
    id: nextId,
    text: value,
    done: false
  };

  nextId++;

  const result = await delayAdd(newTodo);

  todos.push(result); 

  input.value = '';

  renderList(); 
});


list.addEventListener('click', function (e) {

  const li = e.target.parentElement;
  if (!li || !li.dataset.id) return;

  const id = Number(li.dataset.id);

  if (e.target.textContent === '삭제') {
    todos = todos.filter(function (todo) {
      return todo.id !== id;
    });

    renderList();
    return;
  }

  if (e.target.textContent === '수정') {

    const span = li.querySelector('span');

    const editInput = document.createElement('input');
    editInput.value = span.textContent;

    li.replaceChild(editInput, span);

    e.target.textContent = '수정완료';
    return;
  }

  if (e.target.textContent === '수정완료') {
    const editInput = li.querySelector('input');
    const value = editInput.value.trim();
    if (value === '') return;
    todos.forEach(function (todo) {
      if (todo.id === id) {
        todo.text = value;
      }
    });

    renderList();
    return;
  }

  if (e.target.tagName === 'SPAN') {
    todos.forEach(function (todo) {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
    });

    renderList();
  }
});

allBtn.addEventListener('click', function () {
  currentFilter = 'all';
  renderList();
});

doneBtn.addEventListener('click', function () {
  currentFilter = 'done';
  renderList();
});

notDoneBtn.addEventListener('click', function () {
  currentFilter = 'notDone';
  renderList();
});
