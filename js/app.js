document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('add-btn').addEventListener('click', addTodo, false);
  document.getElementById('todo-list').addEventListener('click', toggleComplete, false);
  document.getElementById('todo-list').addEventListener('click', removeNode, false);
});

function addTodo() {
  var inputText = document.getElementById('input-box').value;
  var ul = document.getElementById('todo-list');
  if (inputText !== '') {
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText);
    li.appendChild(textNode);
    addCheckElement(li); 
    ul.appendChild(li);
    document.getElementById('input-box').value = '';
  } else {
    alert('Input text into field');
  }
}

function removeNode(e) {
  if (e.target.classList.contains('close')) {
    var li = e.target.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
  }
}

function toggleComplete(e) {
  var node = e.target;
  node.classList.toggle('complete');
}

function addCheckElement(li) {
  var span = document.createElement('span');
  var checkMark = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(checkMark);
  li.appendChild(span);
}



