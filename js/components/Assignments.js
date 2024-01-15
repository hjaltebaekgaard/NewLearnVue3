import AssignmentList from "./AssignmentList.js"

export default {
    components: {
        AssignmentList
    },

    template: `
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>

        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
    `,

    data() {
        return {
            assignments: [
                {name:"Video 01", complete:false, id:1},
                {name:"Video 02", complete:false, id:2},
                {name:"Video 03", complete:false, id:3}
            ]
        }
    },
    methods: {
        
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