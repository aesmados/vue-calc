import firebase from 'firebase'
export default {
    state: {
        incomes: [
            {id: 1, source: 'job', date: '14.04.20', amount: 100000},
            {id: 2, source: 'order', date: '14.04.20', amount: 15000},
        ]
    },
    mutations: {
        createIncome(state, payload) {
            state.incomes.unshift(payload)
        },
        deleteIncome(state, id){
            let index = state.incomes.indexOf(income => income.id === id)
            state.incomes.splice(index, 1)
        }
    },
    actions: {
        removeIncome({commit}, id) {
            commit('deleteIncome',id)
        },
    },
    getters: {
        allIncomes(state) {
            return state.incomes.filter(i => {
                return i.source && i.amount && i.date
            })
        },
        calcTotalIncomes(state) {
            return state.incomes.reduce((total, income) => total + income.amount,0)
        },
    }
}
