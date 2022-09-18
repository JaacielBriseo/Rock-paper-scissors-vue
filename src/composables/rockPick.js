const rock = 0;
const paper = 1;
const scissors = 2;
const computerPick = () => {
  return Math.floor(Math.random() * 3);
};

const rockPick = () => {
  computerPick();
  if (computerPick() === rock) {
    console.log("Draw");
  } else if (computerPick() === paper) {
    console.log("You loose");
  } else if (computerPick() === scissors) {
    console.log("You win");
  }
};
export default rockPick;
