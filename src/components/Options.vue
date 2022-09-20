<script setup>
import { ref, h } from "vue";
import "../assets/index.css";
const wins = ref(0);
const losses = ref(0);
const draws = ref(0);
const state = ref ('')
const rock = 0;
const paper = 1;
const scissors = 2;
const result = ref('')
const computerPick = () => {
  return Math.floor(Math.random() * 3);
};

const rockPick = () => {
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
};

const scissorsPick = () => {
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
};

const paperPick = () => {
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
};
</script>

<template>
  <div>
    <p class="text-center text-xl m-8 font-bold">Please, select an option:</p>
  </div>
  <div class="flex flex-wrap justify-center">
    <a @click="rockPick()"
      ><img
        class="border-2 rounded-lg border-black w-36 m-5 hover:bg-red-500"
        src="../imgs/rock.png"
    /></a>
    <a @click="paperPick()"
      ><img
        class="border-2 rounded-lg border-black w-36 m-5 hover:bg-green-600"
        src="../imgs/paper.png"
    /></a>
    <a @click="scissorsPick()"
      ><img
        class="border-2 rounded-lg border-black w-36 m-5 hover:bg-yellow-500"
        src="../imgs/scissors.png"
    /></a>
  </div>
  <div class="text-center text-4xl">
    <h4>The computer chooses: <span class="text-red-700">{{result}}</span> {{state}}  </h4>

  </div>  
  <div class="text-4xl m-5 md:text-center">
    <h3 class="text-green-700">Wins:{{ wins }}</h3>
    <h3 class="text-yellow-400">Draws:{{ draws }}</h3>
    <h3 class="text-gray-600">Losses:{{ losses }}</h3>
  </div>

</template>
