import AssignmentListItem from "./AssignmentListItem.js"
import AssignmentTags from "./AssignmentTags.js"

export default {
    components: {
        AssignmentListItem, AssignmentTags
    },
    
    template: `
        <section class="mt-8">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ this.filteredAssignments.length }})</span>
            </h2>
            
            <assignment-tags 
                :assignments-tags="this.assignments.map(a => a.tag)"
                v-model="currentTag"
                />
       
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-2">
                <assignment-list-item
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment-list-item>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: "all"
        }
    },

    computed: {
        filteredAssignments() {
            return this.currentTag === "all" ? this.assignments : this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}