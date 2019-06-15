show('ackerley without using webpack...');

function show(content) {
  window.document.getElementById('application7').innerText = `hello, ${content}`;
  func1(1);
}

function func1(param) {
  console.log('func1 entered');
  console.log('calling func2');
  func2(param + 1);
}

function func2(param) {
  console.log('func1 entered');
  console.log('calling func3');
  func3(param + 2);
}

function func3(param) {
  console.log('func1 entered');
}

