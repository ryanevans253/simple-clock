function displayTime() {
  let current = new Date();

  let h = current.getHours().toString();
  h = h < 10 ? `0${h}` : h;
  let m = current.getMinutes().toString();
  m = m < 10 ? `0${m}` : m;
  let s = current.getSeconds().toString();
  s = s < 10 ? `0${s}` : s;

  let ampm = h < 11 ? "AM" : "PM";

  let currentTime = `${h}:${m}:${s}${ampm}`;

  document.querySelector(".time").innerHTML = currentTime;

  setTimeout(displayTime, 1000);
}

displayTime();
