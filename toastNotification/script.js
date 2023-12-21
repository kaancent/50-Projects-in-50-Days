const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "message1",
  "message2",
  "message3",
  "message4",
  "message5",
  "message6",
  "message7",
  "message8",
  "message9",
  "message10",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerHTML = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2500);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
