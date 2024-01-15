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
            assignments: []
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
    },

    created() {
        fetch("http://localhost:3000/assignments")
            .then(response => response.json())
            .then(data => {
                this.assignments = data
            })
    }
}