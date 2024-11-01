const humIcon = document.querySelector("header nav #search #bars");

let startX;

const aside = document.querySelector("header aside");

humIcon.addEventListener("click", toggleAside);

function toggleAside() {
  if (aside.style.left == "0px") {
    aside.style.left = "-500px";
  } else {
    aside.style.left = "0px";
  }
}

document.addEventListener("click", (event) => {
  if (!humIcon.contains(event.target) && !aside.contains(event.target)) {
    aside.style.left = "-500px";
  }
});

aside.addEventListener("mousedown", (event) => {
  startX = event.clientX;
});

aside.addEventListener("mouseup", (event) => {
  const endX = event.clientX;
  if (startX - endX > 50) {
    aside.style.left = "-500px";
  }
});

aside.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

aside.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0].clientX;
  if (startX - endX > 50) {
    aside.style.left = "-500px";
  }
});
