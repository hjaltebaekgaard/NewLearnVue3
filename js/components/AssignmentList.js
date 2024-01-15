import AssignmentListItem from "./AssignmentListItem.js"

export default {
    components: {
        AssignmentListItem
    },
    
    template: `
        <section class="mt-8">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ this.filteredAssignments.length }})</span>
            </h2>

            <div class="flex gap-2">
                <button 
                    @click="currentTag = tag" 
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-xs"
                    :class="{
                        'border-blue-500 text-blue-500': tag === currentTag
                    }"
                > {{ tag }} </button>
            </div>

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
        },

        tags() {
            return new Set(this.assignments.map(a => a.tag)).add("all")
        }
    }
}