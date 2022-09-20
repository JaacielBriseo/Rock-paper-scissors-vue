<script>
import { ref, h } from "vue";
import "../assets/index.css";
import useLogic from '../composables/useLogic'
import '../assets/fonts.css'

export default {
  name: 'Options',
  setup() {
    const {wins,losses,draws,state,rock,paper,scissors,result,computerPick,rockPick,scissorsPick,paperPick} = useLogic()

    return {
      wins,losses,draws,state,rock,paper,scissors,result,computerPick,rockPick,scissorsPick,paperPick
    }
  }
}
</script>

<template>
  <div>
    <p class="text-center text-xl m-8 font-bold" id="fontSelect">Please, select an option:</p>
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
    <h4 id="fontComputer">
      The computer chooses: <span class="text-red-600 font-extrabold underline" >{{ result }}</span>
      {{ state }}
    </h4>
  </div>
  <div class="text-4xl m-5 md:text-center" id="fontComputer">
    <h3 class="text-green-700 ">Wins: {{ wins }}</h3>
    <h3 class="text-yellow-400 ">Draws: {{ draws }}</h3>
    <h3 class="text-gray-600 ">Losses: {{ losses }}</h3>
  </div>
</template>
