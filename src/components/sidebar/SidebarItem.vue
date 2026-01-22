<template>
  <router-link
    :to="to"
    class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
    active-class="bg-blue-50 text-blue-700 font-semibold"
    @click="$emit('navigate')"
  >
    <span class="text-lg">{{ label }}</span>
  </router-link>  
</template>

<script setup>
defineProps({
  to: String,
  label: String,
})
</script>