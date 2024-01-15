import AssignmentListItem from "./AssignmentListItem.js"
import AssignmentTags from "./AssignmentTags.js"
import Panel from "./Panel.js"

export default {
    components: {
        AssignmentListItem, AssignmentTags, Panel
    },
    
    template: `
        <panel v-show="show" class="w-60">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ this.filteredAssignments.length }})</span>
                </h2>

                <button v-show="canToggle" @click="show = !show">&times</button>
            </div>

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
            
            <slot />
        </panel>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            currentTag: "all",
            show: true
        }
    },

    computed: {
        filteredAssignments() {
            return this.currentTag === "all" ? this.assignments : this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}