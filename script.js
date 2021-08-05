const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const reset = document.querySelector('#reset')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
  if(btn_toggle.innerHTML === "Show Calculation") {
    btn_toggle.innerHTML = "Show Author";
    author.innerHTML = 630610735-length.value;
  }
  else {
    btn_toggle.innerHTML = "Show Calculation";
    author.innerHTML = "630610735 TANANUN CHOWDEE"
  }
}

// more codes for Search and Reset buttons here

reset.onclick = () => {
  length.value = 5
  color.value = "#FF0000"
}