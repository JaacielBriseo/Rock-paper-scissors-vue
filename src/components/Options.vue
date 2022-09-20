<script setup>
import {ref} from 'vue'
import "../assets/index.css";

const wins = ref(0)
const losses = ref (0)
const draws = ref (0)
const rock = 0;
const paper = 1;
const scissors = 2;
const computerPick = () => {
  return Math.floor(Math.random() * 3);
};

const rockPick = () => {
  computerPick();
  if (computerPick() === rock) {
    draws.value++
    console.log("Draw");
  } else if (computerPick() === scissors) {
    wins.value++
    console.log("You win");
  } else if (computerPick() === paper) {
    losses.value++
    console.log("You loose");
  }
};

const scissorsPick = () => {
  computerPick();
  if (computerPick() === scissors) {
    draws.value++
    console.log("Draw");
  } else if (computerPick() === rock) {
    losses.value++
    console.log("You loose");
  } else if (computerPick() === paper) {
    wins.value++
    console.log("You win");
  }
};

const paperPick = () => {
  computerPick();
  if (computerPick() === paper) {
    draws.value++;
    console.log('Draw')
  } else if (computerPick() === scissors) {
    losses.value++
    console.log("You loose");
  } else if (computerPick() === rock) {
    wins.value++
    console.log("You win");
  }
};
</script>

<template>
  <div>
    <p class="text-center text-xl m-8 font-bold">Please, select an option:</p>
  </div>
  <div class="flex flex-wrap justify-center">
    <a @click="rockPick()"
      ><img class="border-2 rounded-lg border-black w-36 m-5 hover:bg-red-500" src="../imgs/rock.png"
    /></a>
    <a @click="paperPick()"
      ><img class="border-2 rounded-lg border-black w-36 m-5 hover:bg-green-600" src="../imgs/paper.png"
    /></a>
    <a @click="scissorsPick()"
      ><img class="border-2 rounded-lg border-black w-36 m-5 hover:bg-yellow-500" src="../imgs/scissors.png"
    /></a>
  </div>
    <div class="text-4xl m-5 md:text-center">
    <h3 class="text-green-700">Wins:{{ wins }}</h3>
    <h3 class="text-red-700">Draws:{{ draws }}</h3>
    <h3 class="text-gray-700">Losses:{{ losses }}</h3>
  </div>
</template>
