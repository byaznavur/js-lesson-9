function show(name, callback) {
  console.log("Hello " + name + " !");
  callback();
}

function welcome() {
  console.log("Welcome !");
}

function logout() {
  console.log("Logout");
}

show("Abdulaziz", welcome);

show("Muharram", logout);
