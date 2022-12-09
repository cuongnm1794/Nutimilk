var body = document.body,
  html = document.documentElement;

var height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

let height1;

console.log(document.getElementById("footer"));

if (document.getElementById("qrcode")) {
  height1 =
    document.getElementById("qrcode").offsetHeight +
    document.getElementById("qrcode").getBoundingClientRect().top +
    window.scrollY;
} else {
  height1 =
    document.getElementById("footer").offsetHeight +
    document.getElementById("footer").getBoundingClientRect().top +
    window.scrollY;
}
console.log(height1);

document.getElementById("background__img").style.height = height1 + "px";