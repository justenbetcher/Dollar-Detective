<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '../model/session';
import { addOtherIncome } from '@/model/budget';
import ProfileForm from '../components/ProfileForm.vue';
import BudgetForm from '../components/BudgetForm.vue';


    const session = useSession();

    const options = [
        "Profile Information",
        "Budget Settings",
    ]

    const selected = ref(options[0]);

    const otherIncome = ref(0);

</script>

<template>
    <div class="columns is-gapless">
        <div class="column is-one-fifth side-menu">
            <section class="hero">
                <div class="hero-body">
                    <p class="title">
                        Options
                    </p>
                    <a class="subtitle" v-for="option, i in options" v-bind:class="{ 'is-active' : selected == option}" @click="selected = option">
                        <p>{{ option }}</p>
                    </a>
                    
                </div>
            </section>
        </div>
        <div class="column">
            
            <div class="container">
                <div v-if="selected == options[0]">
                    <ProfileForm />
                </div>
                <div v-else="selected == opotions[1]">
                    <div v-if="session.user?.budget">
                        <p class="label">On Salary?</p>
                        <p class="field">{{ session.user?.budget.isSalary }}</p>

                        <p class="label">Salary</p>
                        <p class="field">{{ session.user?.budget.salary }}</p>
                        
                        <p class="label">Budget Percentage</p>
                        <p class="field">{{ session.user?.budget.budgetPercentage }}</p>

                        
                        <p class="label">Other income at the moment</p>
                        <div class="control field">
                            <span>$</span>
                            <input type="number" class="input field" v-model="otherIncome">
                        </div>
                        <button class="button field is-light" @click="addOtherIncome(otherIncome)">Add Income to Weekly Budget</button>
                    </div>
                    <div v-else>
                        <BudgetForm />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>



<style scoped>
    .columns {
        height: 100vh;
    }
    .side-menu {
        background-color: rgb(225, 225, 225);
    }
    .side-menu {
        display: flex;
        flex-direction: column;
    }
    .hero-body {
        padding: 12%;
    }
    .hero-body > .title {
        margin-bottom: .25em;
    }
    .box {
        height: 100%;
    }
    .container {
        margin: 5%;
        display: flex;
        flex-direction: column;
        justify-content: left;

    }
    a.is-active {
        text-decoration: underline;
    }
    .input {
        width: 140px;
        height: 30px;
    }
    span {
        font-size: 1.25em;
    }
</style>