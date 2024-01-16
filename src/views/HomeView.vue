<script setup>
import {useFlash} from "@/composables/useFlash"
import {useStorage} from "@/composables/useStorage"
import {ref, watch} from "vue"

let {flash} = useFlash()

let colour = useStorage('colour')

let trick = useStorage('trick', 'What do you mean!? An African or a European swallow?')

let objMemberTest = useStorage('obj', {"first": 42, "second": 1})

setTimeout(() => {
  objMemberTest.value.second = "Beige.."
}, 4000)

</script>

<template>
  <main>
    <TheWelcome />

    <p>
      What is your favority colour!? <input type="text" v-model="colour">
    </p>
    <p>
      What is the capitol of Assyria!? <input type="text" v-model="trick">
    </p>
  </main>
</template>
