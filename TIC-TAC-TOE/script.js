const btns = document.querySelectorAll(".btn");
const Announcement = document.querySelector("#announcement");
const Xw = document.querySelector("#Xw");
const Ow = document.querySelector("#Ow");
const draw = document.querySelector("#draw");
const gamecount = document.querySelector("#gamecount");
const newgame = document.querySelector("#newgame");
const rst = document.querySelector("#rst");

let btn1 = btns[0];
let chance = 0;
const text = Array(9).fill(null);
let Xwin = 0,
  Owin = 0,
  drawC = 0,
  gameC = 0;

rst.addEventListener("click", () => {
  window.location.reload();
});

newgame.addEventListener("click", () => {
  for (const btn of btns) {
    btn.innerText = null;
  }
  chance = 0;
  for (let i = 0; i < text.length; i++) {
    text[i] = null;
  }
  gameC++;
  gamecount.innerText = gameC;
});
for (const btn of btns) {
  btn.addEventListener("click", () => {
    console.log("click");

    if (!(winner(text) || btn.innerText)) {
      text[btn.id] = handleClick(btn, chance);
      if (winner(text)) {
        Announcement.innerText = `${winner(text)} is Winner 🥳`;
        if (winner(text) == "X") {
          Xwin++;
          Xw.innerText = Xwin;
        } else {
          Owin++;
          Ow.innerText = Owin;
        }
      }
      chance++;
    }
    if (chance === 9) {
      Announcement.innerText = `Draw 🙌`;
      drawC++;
      draw.innerText = drawC;
    }
  });
}

const handleClick = (btn, chance) => {
  if (chance % 2 === 0) {
    btn.innerText = "X";
    Announcement.innerText = "O's Chance";
    return "X";
  } else {
    btn.innerText = "O";
    Announcement.innerText = "X's Chance";

    return "O";
  }
};

const winner = (text) => {
  const winarr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winarr.length; i++) {
    const [a, b, c] = winarr[i];
    if (text[a] !== null && text[a] === text[b] && text[a] === text[c]) {
      return text[a];
    }
  }
  return null;
};
