const rock = 0;
const paper = 1;
const scissors = 2;

const computerPick = () => {
  return Math.floor(Math.random() * 3);
};

const paperPick = () => {
  computerPick();
  if (computerPick() === paper) {
    //draws.value++;
    console.log('Draw')
  } else if (computerPick() === scissors) {
    console.log("You loose");
  } else if (computerPick() === rock) {
    console.log("You win");
  }
};
export default paperPick;
