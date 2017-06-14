document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('add-btn').addEventListener('click', addTodo, false);
  document.getElementById('todo-list').addEventListener('click', toggleComplete, false);
});

function addTodo() {
  var inputText = document.getElementById('input-box').value;
  var ul = document.getElementById('todo-list');
  if (inputText !== '') {
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText);
    li.appendChild(textNode);  
    ul.appendChild(li);
    document.getElementById('input-box').value = '';
  } else {
    alert('Input text into field');
  }
}

function removeNode(e) {
  var parent = e.target.parentNode;
  parent.removeChild(e.target);
}

function toggleComplete(e) {
  var node = e.target;
  node.classList.toggle('complete');
}

function addCheckElement() {
  
}

