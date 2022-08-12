let inputValue;
let i = 0;
let progressBar = document.querySelector(".progress-bar");

function styleProgressBar() {
  inputValue = document.getElementById("input-percent").value;
  showBar(inputValue, i);
}
function showBar(inputValue, i) {
  setTimeout(() => {
    if (i < inputValue) {
      i++;
      progressBar.style.width = i + "%";

      if (i < 20) {
        progressBar.style.backgroundColor = "red";
      } else if (i >= 20 && i < 75) {
        progressBar.style.backgroundColor = "yellow";
      } else {
        progressBar.style.backgroundColor = "green";
      }
      showBar(inputValue, i);
    }
  }, 10);
}

// TODO: Not Working
// btnApply.addEventListener("click", () => {
//   inputValue = inputPercentage.value;
//   progressBar.style.transitionDuration = "0.3s";
//   if (inputValue < 20) {
//     progressBar.style.width = `${inputValue}%`;
//     progressBar.classList.add("red");
//   } else if (inputValue >= 20 && inputValue < 75) {
//     progressBar.style.width = `${inputValue}%`;
//     progressBar.classList.add("yellow");
//   } else {
//     progressBar.style.width = `${inputValue}%`;
//     progressBar.classList.add("green");
//   }
// });
