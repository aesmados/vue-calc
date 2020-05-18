<template>
    <div>
        <form @submit.prevent="submit">
            <input class="form-control mb-2" type="text" placeholder="source" v-model="source">
            <input class="form-control mb-2" type="text" placeholder="date" v-model="date">
            <input class="form-control mb-3" type="number" min="0" placeholder="amount" v-model.number="amount">
            <button type="submit" class="btn btn-primary mb-3">Create</button>
        </form>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default {
        data () {
            return {
                source: '',
                date: '',
                amount: ''
            }
        },
        methods: {
            ...mapMutations(["createOutcome"]),
            submit() {
                this.createOutcome({
                    source: this.source,
                    date: this.date,
                    amount: this.amount,
                    id: Date.now()
                })
                this.source = this.date = this.amount = "";
            }
        }
    }
</script>
