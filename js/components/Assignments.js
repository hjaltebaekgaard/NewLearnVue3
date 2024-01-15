import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },

    template: `
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>

        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>

        <assignment-create @add="create"></assignment-create>
    `,

    data() {
        return {
            assignments: [
                {name:"Video 01", complete:false, id:1, tag: "science"},
                {name:"Video 02", complete:false, id:2, tag: "reading"},
                {name:"Video 03", complete:false, id:3, tag: "reading"}
            ],
        }
    },
    methods: {
        create(assignmentName) {
            
            this.assignments.push({
                name: assignmentName, 
                complete: false, 
                id: this.assignments.length + 1
            })

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