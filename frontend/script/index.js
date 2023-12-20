let nameEl = document.getElementById("s-name");
let emailEl = document.getElementById("s-email");
let passEl = document.getElementById("s-pass");
const signInform = document.getElementById("signUp_form");

// for submitting register form
signInform.addEventListener("submit", (event) => {
  event.preventDefault();

  const obj = {
    name: nameEl.value,
    email: emailEl.value,
    password: passEl.value,
  };

  // console.log(obj);
  fetch("https://urlshortener-rtw2.onrender.com/user/register", {
    method: "POST",

    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      alert(res.msg);
      SrefreshForm();
    })
    .catch((err) => console.log(err));
});
// function for form referesh
function SrefreshForm() {
  signInform.reset();
}

// feching login Data
let LemailEl = document.getElementById("l-email");
let LpassEl = document.getElementById("l-pass");

let loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const obj = {
    email: LemailEl.value,
    password: LpassEl.value,
  };
  // console.log(obj)
  fetch("https://urlshortener-rtw2.onrender.com/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      localStorage.setItem("token", data.token);

      let user = data.user;

      localStorage.setItem("userInfo", JSON.stringify(user));

      if (data.isError == false) {
        alert(data.msg);

        window.location.href = "./url.html";
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => console.log(err));
});
