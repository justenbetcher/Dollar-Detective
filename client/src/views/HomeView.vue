<script setup lang="ts">
import { ref } from 'vue';
import Chart from '../components/Chart.vue';
import EntryForm from '../components/EntryForm.vue';

const timeFrame = ref<string[]>([
    'week',
    'month',
    'year',
    'beginning',
])
</script>

<template>
    
        <div class="columns">
            <div class="column col-1">This is column 1</div>
            <div class="column is-half col-2">
                <h1 class="title">This is the home page</h1>

                <div class="chart-container box">
                    <Chart />
                </div>
                <div class="entry-container box">
                    <EntryForm />
                </div>
            </div>
            <div class="column col-3">This is column 3</div>
        </div>
    
</template>



<style scoped>

.column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.chart-container {
    width: 100%;
}
.entry-container {
    width: 100%;
}
.columns {
        margin-right: 8px;
        margin-left: 8px;
    }

@media screen and (max-width: 900px) {
    .col-1, .col-3 {
        display: none;
    }
    .is-half {
        width: 100%;
    }
}

</style>