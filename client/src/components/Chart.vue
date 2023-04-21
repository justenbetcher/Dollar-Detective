<script setup lang="ts">
import { ref } from 'vue';
import * as d3 from 'd3';

const selected = ref("week");

const timeFrames = [
    "week",
    "month",
    "year"
];



</script>

<template>
    <div class="container">
        <p>This is the chart view for {{ selected }}</P>
        <div class="time-container">
            <a class="time-frame has-text-info" v-for="time, i in timeFrames" v-bind:class="{ 'is-active': time == selected }" @click="selected = time">{{ time }}</a>
        </div>
        
    </div>
</template>



<style scoped>
    .time-container {
        display: flex;
        flex-direction: row;
    }
    .time-frame {
        margin-right: 8px;
    }
    .time-frame.is-active {
        text-decoration: underline;
    }

</style>