<template>
  <div class="min-h-screen bg-gray-900 flex">

    <aside class="hidden md:flex flex-col w-64 bg-gray-800 border-r">
      <Sidebar />
    </aside>

    <div 
      v-if="isMobileSidebarOpen"
      class="fixed inset-0 z-40 md:hidden"
    >
      <div
        class="absolute inset-0 bg-black/40"
        @click="isMobileSidebarOpen = false"
      ></div>

      <aside class="relative w-64 h-full bg-gray-800 border-r p-4">
        <Sidebar @navigate="isMobileSidebarOpen = false" />
      </aside>
    </div>

    <div class="flex-1 flex flex-col">
      <header class="h-16 bg-gray-900 border-b flex items-center px-4">
        <button
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
          @click="isMobileSidebarOpen = true"
        >
          <svg
            class="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <h1 class="ml-2 text-2xl font-semibold text-gray-700">
          Dashboard
        </h1>

        <div class="ml-auto flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-gray-200"></div>
        </div>
      </header>

      <main class="flex-1 p-4 md:p-6">
        <router-view />
      </main>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';

const isMobileSidebarOpen = ref(false);
</script>