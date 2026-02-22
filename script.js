function runCommand(){
  const input = document.getElementById("cmd");
  const output = document.getElementById("output");
  const value = input.value.trim();

  if(value === "whoami"){
    output.innerHTML += "<p>> System Administrator</p>";
  }
  else if(value === "help"){
    output.innerHTML += "<p>> Commands: whoami, help, clear</p>";
  }
  else if(value === "clear"){
    output.innerHTML = "";
  }
  else{
    output.innerHTML += "<p>> Unknown command</p>";
  }

  input.value = "";
}