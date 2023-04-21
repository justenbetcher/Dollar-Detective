<script setup lang="ts">
import { ref } from 'vue';
import { addOtherIncome } from '@/model/budget';

const otherIncome = ref(0);

</script>

<template>
    <p class="label">Other Income</p>
    <div class="control field">
        <span>$</span>
        <input type="number" class="input field" v-model="otherIncome">
    </div>
    <button class="button field is-primary" @click="addOtherIncome(otherIncome)">Add Income</button>
</template>



<style scoped>
    .input {
        width: 140px;
        height: 30px;
    }
    span {
        font-size: 1.25em;
        margin-right: 3px;
    }
</style>