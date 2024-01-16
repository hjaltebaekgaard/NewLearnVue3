<script setup>

import { useCounterStore } from "@/stores/CounterStore.js"

let counter = useCounterStore()
</script>

<template>
  <div class="counter">
    <h1>Count by clicking a button..</h1>
    <button @click="counter.increment">Clicks:{{ counter.count }}</button>
    <p>{{ counter.remaining }}</p>
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

