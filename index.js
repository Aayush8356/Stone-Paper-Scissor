const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const player = document.getElementById("player-img");
const comp = document.getElementById("comp-img");
const win = document.getElementById("win");

const arr = [
  {
    name: "stone",
    value: 2,
    src: "https://atlas-content-cdn.pixelsquid.com/stock-images/stone-rock-7G5Bva6-600.jpg",
  },
  {
    name: "paper",
    value: 0,
    src: "https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg",
  },
  {
    name: "scissor",
    value: 1,
    src: "https://i.pinimg.com/originals/68/0c/e8/680ce8a9cf105b860fb74c8690d9f1bc.png",
  },
];

const returnValue = (name) => {
  return arr.find((item) => item.name === name).value;
};
const returnImg = (name) => {
  return arr.find((item) => item.name === name).src;
};

const generateCompChoice = () => {
  const random = Math.floor(Math.random() * 3);
  return arr[random].name;
};

const handleClick = (e) => {
  e.preventDefault();
  let compChoice = generateCompChoice();
  let p = returnValue(e.target.id);
  let c = returnValue(compChoice);
  let imgPlayer = returnImg(e.target.id);
  let imgComp = returnImg(compChoice);
  player.src = imgPlayer;
  comp.src = imgComp;
  // player.innerHTML = e.target.id;
  // comp.innerHTML = compChoice;
  console.log(c, p);

  setTimeout(() => {
    if (p < c) {
      win.innerHTML = "Comp Won";
    } else if (c < p) {
      win.innerHTML = "Player Won";
    } else {
      win.innerHTML = "Draw";
    }
    win.style.fontSize = "3rem";
  }, 750);
};

stone.onclick = handleClick;
paper.onclick = handleClick;
scissor.onclick = handleClick;
