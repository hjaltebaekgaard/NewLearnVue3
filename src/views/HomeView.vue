<script setup>
  import TabbableTextArea from "@/components/TabbableTextArea.vue"
  import { ref } from "vue"

  let comment = ref('boellehat')

</script>

<template>
  <main>
    <form>
      <TabbableTextArea v-model="comment" style="width: 100%; height: 300px;" />
    </form>
  </main>
</template>
<!-- 
  provide (parent)

  import {provide, ref} from "vue"
  let name ) ref('John Doe')
  provide('name', {
    name,
    changeName: () => {
      name.value = "Changed"
    }
  })

  inject (child)

  import {inject} from "vue"
  let {name, changeName} = inject('name')


  example2:
  Parent
  let props = defineProps({
    quiz: Object
  })

  provide('quiz', props.quiz)

  Child
  let quiz = inject('quiz')
 -->