<script setup>
import {useFlash} from "@/composables/useFlash";

let {flash} = useFlash()
/* import TheWelcome from '../components/TheWelcome.vue'
import { onMounted, ref } from "vue";


  
onMounted(() => {
    alert("I am mounted")
});

let message = ref("Hello World!!")

setTimeout(() => {
  message.value = "Time's up!"
}, 3000)

 */
</script>

<template>
  <main>
    <TheWelcome />

    <p>
      <button @click="flash('Test', 'it works!')">Click Me</button>
    </p>
  </main>
</template>
