const input = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');


addBtn.addEventListener('click', function () {
  const value = input.value.trim();
  if (value === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = value;

  const editBtn = document.createElement('button');
  editBtn.textContent = '수정';

  const delBtn = document.createElement('button');
  delBtn.textContent = '삭제';

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = '';
});


list.addEventListener('click', function (e) {

  const li = e.target.parentElement;


  if (e.target.textContent === '삭제') {
    li.remove();
    return;
  }

  if (e.target.textContent === '수정') {
    const span = li.querySelector('span');

    const editInput = document.createElement('input');
    editInput.value = span.textContent;

    li.replaceChild(editInput, span);

    e.target.textContent = '완료'; 
    return;
  }

  if (e.target.textContent === '완료') {
    const editInput = li.querySelector('input');

    const span = document.createElement('span');
    span.textContent = editInput.value;

    li.replaceChild(span, editInput);

    e.target.textContent = '수정';
    return;
  }

  if (e.target.tagName === 'SPAN') {
    e.target.classList.toggle('done');
  }

});