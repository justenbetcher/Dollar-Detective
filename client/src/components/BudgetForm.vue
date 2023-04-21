<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '../model/session';
import  { setBudget, type Budget } from '../model/budget';

    const session = useSession();

    const newBudget = ref<Budget>({})
    
</script>

<template>
    <div v-if="session.user">

        <p class="label">Are you on Salary</p>
        <div class="control radio">
            <label class="label">
                <input class="field" type="radio" name="answer" value="yes" @click="newBudget.isSalary = true">
                Yes
            </label>
            <label class="label">
                <input class="field" type="radio" name="answer" value="no" @click="newBudget.isSalary = false">
                No
            </label>
        </div>

        <div v-if="newBudget.isSalary">
            <p class="label">Anual Salary</p>
            <div class="control">
                <span>$</span>
                <input type="number" class="input field" v-model="newBudget.salary">
            </div>
        </div>

        <p class="label">Budget Percentage</p>
        <div class="control field">
            <span>%</span>
            <input type="number" class="input field" v-model="newBudget.budgetPercentage">
        </div>

        <button class="button is-primary" @click="setBudget(newBudget)">Save</button>
    </div>
    <div>
        
    </div>
</template>



<style scoped>
.radio > label {
    margin-right: 8px;
}
.radio {
    display: flex;
    flex-direction: row;
}
.input {
    width: 140px;
    height: 30px;
}
span {
    font-size: 1.25em;
}


</style>