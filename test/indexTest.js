const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
    sinon.spy(input, 'addEventListener');
  })

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  })
})
