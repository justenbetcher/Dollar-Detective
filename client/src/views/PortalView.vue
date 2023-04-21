<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useLogin, useSession } from '../model/session';

const isSignIn = ref(true);
</script>

<template>
    <div>
        
    <div class="container">
          <div class="box fades-in">

            <div class="columns has-text-centered has-text-primary">

              <div class="column">
                <a class="hoverable has-text-primary" v-bind:class="{ 'is-active' : isSignIn }" @click="isSignIn = true"> Sign in </a>
              </div>

              <div class="column">
                <a class="hoverable has-text-primary" v-bind:class="{ 'is-active' : !isSignIn }" @click="isSignIn = false"> Join us </a>
              </div>

            </div>
                <div class="field has-text-primary">
                    Email
                    <input class="input has-text-primary" type="text" placeholder="Email">
                </div>

                <div class="field has-text-primary">
                    Password
                    <input class="input has-text-primary" type="password" placeholder="Password">
                </div>

                <button class="button" @click="useLogin()">Continue</button>
            </div>
      </div>

    </div>
</template>



<style scoped>
@media screen and (min-width: 512px){
    .box {
        min-width: 250px;
    }
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh
}
a.is-active { 
    text-decoration: underline;
}

</style>