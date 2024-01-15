import AssignmentList from "./AssignmentList.js"

export default {
    components: {
        AssignmentList
    },

    template: `
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>

        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>

        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" placeholder="New Assignment..." class="p-2"/>
                <button type="submit" class="bg-white p-2 border-left">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            assignments: [
                {name:"Video 01", complete:false, id:1},
                {name:"Video 02", complete:false, id:2},
                {name:"Video 03", complete:false, id:3}
            ],

            newAssignment: ''
        }
    },
    methods: {
        add() {
           
            this.assignments.push({
                name: this.newAssignment, 
                complete: false, 
                id: this.assignments.length + 1
            })

            this.newAssignment = ''
        }
    },
    computed: {
        inProgressAssignments() {
            return this.assignments.filter(a => !a.complete)
        },
        completedAssignments() {
            return this.assignments.filter(a => a.complete)
        }
    }
}