<script setup lang="ts">

const categories: string[] = [
        'Resturants & Dining',
        'Entertainment & Shopping',
        'Travel',
        'Transpertaion',
        'Groceries',
        'Personal & Family Care',
        'Health',
        'Finace'
    ]
</script>

<template>
    <div class="field">
        <label class="label">Choose Category</label>
        <div class="control">
            <div class="select">
                <select>
                    <option disabled selected value="">Category</option>
                    <option v-for="category, i in categories" v-bind:value="category">{{ category }}</option>
                </select>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">Enter Total Price</label>
        <div class="control">
            <span class="dollar-sign">$</span><input class="input price-input" type="number" min="0" placeholder="Price">
        </div>
    </div>

    
</template>



<style scoped>
    .price-input {
        width: 125px;
    }
    .dollar-sign {
        font-size: 1.5em;
        margin-right: 3px;
    }

</style>