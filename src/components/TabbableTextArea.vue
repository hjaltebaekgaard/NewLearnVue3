<script setup>

defineProps({
    modelValue: String
})

let emit = defineEmits([
                'update.modelValue'
            ])

function onPressTab(e) {
    let textarea = e.target

    let val = textarea.value,
        start = textarea.selectionStart,
        end = textarea.selectionEnd;
    
    
    textarea.value = val.substring(0, start) + "\t" + val.substring(end);

    textarea.selectionStart = textarea.selectionEnd = start + 1;

    e.preventDefault();
}

/* 
function update(e) {
    emit('update:modelValue', e.target.value)
} */

</script>

<template>
    <textarea 
        @keydown.tab.prevent="onPressTab"
        @keyup="emit('update:modelValue', $event.target.value)" 
        v-text="modelValue"></textarea>
</template>