const rock = 0;
const paper = 1;
const scissors = 2;
const computerPick = () => {
  return Math.floor(Math.random() * 3);
};

const scissorsPick = () => {
  computerPick();
  if (computerPick() === scissors) {
    console.log("Draw");
  } else if (computerPick() === rock) {
    console.log("You loose");
  } else if (computerPick() === paper) {
    console.log("You win");
  }
};
export default scissorsPick;
