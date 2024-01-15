<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { onMounted, ref } from "vue";


  
onMounted(() => {
    alert("I am mounted")
});

let message = ref("Hello World!!")

setTimeout(() => {
  message.value = "Time's up!"
}, 3000)


</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message" />
    </p>
  </main>
</template>
