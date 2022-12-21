var btnTranslate = document.querySelector("#click");

function clickEvent() {
  console.log("clicked!");
  console.log("input", textInput.value);
}

btnTranslate.addEventListener("click", clickEvent);

var textInput = document.querySelector("#txt-input");
