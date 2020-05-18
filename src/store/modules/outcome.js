export default {
    state: {
        outcomes: [
            {id: 1, source: 'products', date: '14.04.20', amount: 40000},
        ]
    },
    mutations: {
        createOutcome(state, newIncome) {
            state.outcomes.unshift(newIncome)
        },
        deleteOutcome(state, id) {
            let index = state.outcomes.indexOf(outcome => outcome.id === id)
            state.outcomes.splice(index, 1)
        }
    },
    actions: {
        removeOutcome({commit}, id) {
            commit('deleteOutcome',id)
        }
    },
    getters: {
        allOutcomes(state) {
            return state.outcomes.filter(i => {
                return i.source && i.amount && i.date
            })
        },
        calcTotalOutcomes(state) {
            return state.outcomes.reduce((total,o) => total + o.amount, 0)
        }
    }
}
