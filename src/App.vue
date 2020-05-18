<template>
  <div id="app">
    <div class="container">
      <h1>Income calc</h1>
      <div class="row">
        <div class="col-sm-6">
          <h3>Income</h3>
          <AddIncome/>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Source</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="(i,income) in allIncomes" :key="i.id">
                <td>{{i.source}}</td>
                <td>{{i.date}}</td>
                <td>{{i.amount.toLocaleString()}}</td>
                <td><button @click="removeIncome(income, i)" class="btn-sm btn-danger">&#10005</button></td>
              </tr>
              <tr>
                <td colspan="2">Total Income</td>
                <td colspan="2"><strong>{{calcTotalIncomes.toLocaleString()}}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-sm-6">
          <h3>Outcome</h3>
          <AddOutcome/>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Source</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(o, outcome) in allOutcomes" :key="o.id">
                <td>{{o.source}}</td>
                <td>{{o.date}}</td>
                <td>{{o.amount.toLocaleString()}}</td>
                <td><button @click="removeOutcome(outcome, o)" class="btn-sm btn-danger">&#10005</button></td>
              </tr>
              <tr>
                <td colspan="2">Total Outcome</td>
                <td colspan="2"><strong>{{calcTotalOutcomes.toLocaleString()}}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-sm-12">
          <h3 class="mt-5">Total:
            <strong class="alert alert-success" v-if="calcTotalIncomes - calcTotalOutcomes >= 0">{{calcTotalIncomes - calcTotalOutcomes}} </strong>
            <strong class="alert alert-danger" v-else>{{calcTotalIncomes - calcTotalOutcomes}} </strong>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
import AddIncome from './components/AddIncome'
import AddOutcome from './components/AddOutcome'
export default {
  data() {
    return{
      incomes: [],
      outcome: []
    }
  },
  mounted() {

  },
  computed: mapGetters(["allIncomes", "allOutcomes", "calcTotalIncomes", "calcTotalOutcomes",""]),
  methods: mapActions(["removeIncome", "removeOutcome"]),
  name: 'App',
  components: {
    AddIncome, AddOutcome
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
}
</style>
