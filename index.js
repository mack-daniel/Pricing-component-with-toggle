const togglerBtn = document.querySelector(".toggler-btn");
const basic = document.getElementById("basic");
const pro = document.getElementById("pro");
const master = document.getElementById("master");

togglerBtn.addEventListener("click", () => {
  togglerBtn.classList.toggle("active");

  if (togglerBtn.classList.contains("active")) {
    basic.innerText = "199.99";
    pro.innerText = "249.99";
    master.innerText = "399.99";
  } else {
    basic.innerText = "19.99";
    pro.innerText = "24.99";
    master.innerText = "39.99";
  }
});
