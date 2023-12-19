let s_nameEl = document.getElementById("s-name");
let s_emailEl = document.getElementById("s-email");
let s_passEl = document.getElementById("s-pass");
const signInform = document.getElementById("signUp_form");

signInform.addEventListener("submit", (event) => {
  event.preventDefault();
  const obj = {
    name: s_nameEl.value,
    email: s_emailEl.value,
    password: s_passEl.value,
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

function SrefreshForm() {
  signInform.reset();
}

let l_emailEl = document.getElementById("l-email");
let l_passEl = document.getElementById("l-pass");

let loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const obj = {
    email: l_emailEl.value,
    password: l_passEl.value,
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
      console.log(data);
      localStorage.setItem("token", data.token);
      let user = data.user;
      localStorage.setItem("userInfo", JSON.stringify(user));
      if (data.isError == false) {
        alert("login successful");
        window.location.href = "./url.html";
      } else {
        alert("Wrong Credintials");
      }
    })
    .catch((err) => console.log(err));
});
