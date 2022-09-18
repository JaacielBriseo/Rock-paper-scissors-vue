<script setup>
import "../assets/index.css";

defineProps({
  msg: String,
});
</script>

<template>
  <h1 class="underline text-center text-3xl m-8 font-bold">{{ msg }}</h1>
</template>
