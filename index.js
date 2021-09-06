const menuicon = document.querySelector("#menuicon");
const menulist = document.querySelector("#menulist");

menuicon.addEventListener("click", (e) => {
  if (menulist.classList.contains("hidden")) {
    menulist.classList.remove("hidden");
  } else {
    menulist.classList.add("hidden");
  }
});

window.addEventListener("resize", (e) => {
  console.log(e.target.window.innerWidth);
  if (!menulist.classList.contains("hidden") && e.target.window.innerWidth > 640) {
    menulist.classList.add("hidden");
  }
});

const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;
