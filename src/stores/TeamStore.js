import {defineStore} from "pinia"

export let useTeamStore = defineStore("team", {
    state() {
        return {
            name: 'Default',
            spots: 10,
            members: []
        }
    },
    
    actions: {

    },

    getters: {

    }
})