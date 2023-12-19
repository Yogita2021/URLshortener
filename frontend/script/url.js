// fetch requests
let token = localStorage.getItem("token");
if (token) {
  const formEl = document.getElementById("form");
  let inputEl = document.getElementById("UrlInput");
  const shortenUrl = document.getElementById("shortenUrl");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
      originalUrl: inputEl.value,
    };
    console.log(obj);
    fetch("https://urlshortener-rtw2.onrender.com/url/shorten", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify(obj),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data.shorten);
        shortenUrl.innerText = `https://urlshortener-rtw2.onrender.com/url/${data.shorten}`;

        HideBtn();

        shortenUrl.addEventListener("click", () => {
          window.location.href = `https://urlshortener-rtw2.onrender.com/url/${data.shorten}`;
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  // copy functionality
  function copyToClipboard() {
    const copyText = document.getElementById("shortenUrl");

    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = copyText.innerText;
    document.body.appendChild(tempInput);

    // Select the text in the temporary input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

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
} else {
  alert("you are not authorized person");
}

// For user Information

let User = document.getElementById("User");

let userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
if (userInfo) {
  User.innerText = userInfo.name;
}
