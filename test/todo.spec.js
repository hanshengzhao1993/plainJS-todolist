var expect = chai.expect;

var $ = selector => document.querySelector(selector);

describe('Todo List', function() {

  beforeEach(function(){
    $('#input-box').value = 'A todo';
    $('#add-btn').click();
  });

  it('should add a todo when input box is filled', function() {
    expect($('ul > li')).to.exist;
  });

  it('should add complete className when li element is clicked', function() {
    var li = $('.container ul > li');
    li.click();
    expect(li.classList.contains('complete')).to.be.true;
  });

  

});