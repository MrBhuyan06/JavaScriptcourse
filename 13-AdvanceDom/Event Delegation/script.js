//adding event to the common parent

document.querySelector(".parent-container").addEventListener("click", (e) => {
  // console.log(e.target.classList);
  if (e.target.classList.contains("btn1")) {
    document.querySelector(".para").textContent = "EVENT Resgister";
  }
  if (e.target.classList.contains("btn2")) {
    document.querySelector(".para").textContent = "EVENT Resgister2";
  }
  if (e.target.classList.contains("btn3")) {
    document.querySelector(".para").textContent = "EVENT Resgister3";
  }
});
