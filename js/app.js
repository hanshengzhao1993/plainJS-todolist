
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