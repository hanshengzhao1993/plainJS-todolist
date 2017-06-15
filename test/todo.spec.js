var expect = chai.expect;

var $ = selector => document.querySelector(selector);
var $all = selector => document.querySelectorAll(selector);

describe('Todo List', function() {

  beforeEach(function(){
    $('#input-box').value = 'A todo';
    $('#add-btn').click();
  });

  afterEach(function() {
    var deleteItems = $all('.container ul > li > span');
    deleteItems.forEach(function(item) {
      item.click();
    });
  })

  it('should add a todo when input box is filled', function() {
    expect($('ul > li')).to.exist;
  });

  it('should add complete className when li element is clicked', function() {
    var li = $('.container ul > li');
    li.click();
    expect(li.classList.contains('complete')).to.be.true;
  });

  it('should remove li element on close click', function() {
    var listItems = $all('.container ul > li');
    expect(listItems).to.have.length(1);
    var checkMark = $('.container ul > li > span');
    checkMark.click();
    var updatedListItems = $all('.container ul > li');
    expect(updatedListItems).to.have.length(0);
  });

});