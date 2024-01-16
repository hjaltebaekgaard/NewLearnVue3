import { reactive } from "vue"

export let state = reactive({
    count: 0,

    increment() {
        this.count += 1
    }
})