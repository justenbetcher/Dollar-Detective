<script setup lang="ts">
import { ref } from 'vue';
import OtherIncomeForm from '@/components/OtherIncomeForm.vue';
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
        <h1 class="title">Recent Budget Activity</h1>
        <div class="columns">
            <div class="column col-1">
                <div class="panel">
                    <div class="panel-heading">Add To Weekly Budget</div>
                    <div class="box">
                        <OtherIncomeForm />
                    </div>
                </div>
                
            </div>

            <div class="column is-half col-2">
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
        align-items: center;
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

    h1 {
        text-align: center;
    }
    
    .box {
        width: 100%;
    }
</style>