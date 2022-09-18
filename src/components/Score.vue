<script setup>
import "../assets/index.css";
import {ref} from 'vue'
import paperPick from '../composables/paperPick'
const wins = ref(0)
const draws = ref(0)
const losses = ref(0)

</script>

<template>
  <div class="text-4xl m-5 md:text-center">
    <h3 class="text-green-700">Wins:{{wins}}</h3>
    <h3 class="text-red-700">Draws:{{draws}}</h3>
    <h3 class="text-gray-700">Losses:{{losses}}</h3>
  </div>
</template>
