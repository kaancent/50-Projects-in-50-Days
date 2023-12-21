const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let likes = 0;

//can use "dblclick" too
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getDate() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else clickTime = new Date().getTime();
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  times.innerText = ++likes;

  setTimeout(() => heart.remove(), 1000);
};
