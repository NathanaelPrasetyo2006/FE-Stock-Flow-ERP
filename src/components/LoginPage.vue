<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
      <h2 class="mt-10 text-center text-3xl font-bold tracking-tight text-white">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="username" class="block text-base font-medium text-gray-100">Username</label>
          <div class="mt-2">
            <input v-model="username" type="text" name="username" id="username" autocomplete="username" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-base font-medium text-gray-100">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input v-model="password" type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-base font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Log in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['loginSuccess']);
const username = ref('');
const password = ref('');

function handleLogin() {
  if (username.value && password.value) {
    // Contoh logika login sederhana
    if (username.value === 'admin' && password.value === 'password') {
      console.log('Emitting loginSuccess event'); // Debugging log
      emit('loginSuccess');
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  } else {
    alert('Please fill in all fields');
  }
}
</script>