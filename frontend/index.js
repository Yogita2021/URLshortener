// fetch requests

const formEl = document.getElementById("form");
let inputEl = document.getElementById("UrlInput");
const shortenUrl = document.getElementById("shortenUrl");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    originalUrl: inputEl.value,
  };
  console.log(obj);
  fetch("http://localhost:3000/url/shorten", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data.shorten);
      shortenUrl.innerText = `http://localhost:3000/url/${data.shorten}`;
      HideBtn();
      shortenUrl.setAttribute(
        "href",
        `http://localhost:3000/url/${data.shorten}`
      );
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// copy functionality
function copyToClipboard() {
  // Get the text to copy
  const copyText = document.getElementById("shortenUrl");

  // Create a temporary input element
  const tempInput = document.createElement("input");
  tempInput.value = copyText.innerText;
  document.body.appendChild(tempInput);

  // Select the text in the temporary input
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Optionally, provide feedback to the user
  alert("Text copied to clipboard: " + copyText.innerText);
}

// copyBtn Hide

let copybtn = document.getElementById("copybtn");
window.onload = HideBtn;
function HideBtn() {
  if (!shortenUrl.innerText) {
    copybtn.style.display = "None";
  } else {
    copybtn.style.display = "block";
  }
}
