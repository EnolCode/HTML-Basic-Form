const button = document.querySelector(".form__submit");
const name = document.querySelector(".form__name");
const age = document.querySelector(".form__age");
const email = document.querySelector(".form__email");
const option = document.getElementById("option");
const radio = document.getElementsByName("recommended");
const checkBox = document.getElementsByName("cbox");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let recommended;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      recommended = radio[i].value;
    }
  }

  let cbox = [];
  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      cbox.push(checkBox[i].value);
    }
  }

  console.log({
    Name: name.value,
    Age: age.value,
    Email: email.value,
    Ocupation: option.value,
    "Recommended?": recommended,
    Languajes: cbox,
  });
});
