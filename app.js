var btnTranslate = document.querySelector("#click");

function clickEvent() {
  console.log("clicked!");
  console.log("input", textInput.value);
  document.querySelector("#txt-output").innerText =
    "ajajajajaj + " + textInput.value;
}

btnTranslate.addEventListener("click", clickEvent);

var textInput = document.querySelector("#txt-input");

// var textOutput = document.querySelector("txt-output") --> mistake "#"
// document.querySelector("#txt-output").innerText = "ravi";
