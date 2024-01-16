<template>
  <div class="counter">
    <h1>Count by clicking a button..</h1>
    <button @click="state.increment">Clicks:{{ state.count }}</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>

import {ref} from "vue"  
import { state } from "@/stores/counterStore.js"

</script>