function copyPassword() {
  var copyText = document.querySelector(".password-input");
  var message = document.querySelector(".message");
  if (copyText.value.length) {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    message.innerHTML =
      "<img src='img/clipboard-check.svg' alt=''>copied successfully";
    message.classList.add("success");
    return 0;
  }
  message.innerHTML =
    "<img src='img/circle-x.svg' alt=''>there is no password has been generated yet!";
  message.classList.add("error");
  return 1;
}

const fillRange = () => {
  const range = document.querySelector("#password-length").value;
  document.querySelector("#password-range").innerHTML = range;
};

window.addEventListener("load", () => fillRange());

function generatePassword() {
  var message = document.querySelector(".message");
  var upper = document.querySelector("#upper");
  var lower = document.querySelector("#lower");
  var number = document.querySelector("#number");
  var sym = document.querySelector("#sym");
  const length = Number(document.querySelector("#password-length").value);
  let result = "";
  let characters = "";
  if (upper.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lower.checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (number.checked) {
    characters += "0123456789";
  }
  if (sym.checked) {
    characters += "!@#$%^&*()_+=-;";
  }
  if (upper.checked || lower.checked || number.checked || sym.checked) {
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    document.querySelector(".password-input").value = result;
    message.classList.remove("error");
    message.classList.remove("success");
  } else {
    document.querySelector(".password-input").value = result;
    var message = document.querySelector(".message");
    message.innerHTML =
      "<img src='img/circle-x.svg' alt=''>set your settings before generating!";
    message.classList.add("error");
  }
}
