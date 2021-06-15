var scope = 'global scope';

function f() {
  console.log(scope)
}

function checkscope() {
  var scope = 'local scope';

  f();
}
checkscope();