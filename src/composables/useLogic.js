import { ref } from "vue";

const useLogic = () => {
  const wins = ref(0);
  const losses = ref(0);
  const draws = ref(0);
  const state = ref("");
  const rock = 0;
  const paper = 1;
  const scissors = 2;
  const result = ref("");

  const computerPick = () => {
    return Math.floor(Math.random() * 3);
  }

  return {
    wins,losses,draws,state,rock,paper,scissors,result,


      rockPick : () => {
        computerPick();
        if (computerPick() === rock) {
          draws.value++;
          result.value = 'Rock'
          state.value = 'its a draw'
          console.log(`The computer chooses rock, its a draw`);
        } else if (computerPick() === scissors) {
          wins.value++;
          result.value = "Scissors"
          state.value = 'YOU WIN!'
          console.log(" scissors");
        } else if (computerPick() === paper) {
          losses.value++;
          result.value = "Paper"
          state.value = 'you loose...'
          console.log("The computer chooses paper, you loose");
        }
      },
     scissorsPick : () => {
        computerPick();
        if (computerPick() === scissors) {
          draws.value++;
          result.value = "Scissors"
          state.value = 'its a draw'
          console.log("The computer chooses scissors, its a draw");
        } else if (computerPick() === rock) {
          result.value = "Rock"
          state.value = 'you loose...'
          losses.value++;
          console.log("The computer chooses rock, you loose");
        } else if (computerPick() === paper) {
          wins.value++;
          state.value = 'YOU WIN!'
          result.value ="Paper"
          console.log("The computer chooses paper, you win");
        }
      },
      paperPick : () => {
        computerPick();
        if (computerPick() === paper) {
          draws.value++;
          state.value = 'its a draw'
          result.value = "Paper"
          console.log("The computer chooses paper, its a draw");
        } else if (computerPick() === scissors) {
          losses.value++;
          state.value = 'you loose...'
          result.value = "Scissors"
          console.log("The computer chooses scissors, its a loose");
        } else if (computerPick() === rock) {
          wins.value++;
          state.value = 'YOU WIN!'
          result.value = "Rock"
          console.log("The computer chooses rock, its a win");
        }
  }}
};

export default useLogic;
