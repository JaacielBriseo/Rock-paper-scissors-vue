<script setup>
import "../assets/index.css";
import rockPick from "../composables/rockPick";
import paperPick from "../composables/paperPick";
import scissorsPick from "../composables/scissorsPick";
import Score from "./Score.vue";
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
</template>
