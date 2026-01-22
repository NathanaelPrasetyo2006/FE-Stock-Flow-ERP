<template>
  <div class="h-full flex flex-col p-4">
    
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-white">
        Admin Panel
      </h2>
      <p class="text-xl text-gray-500">
        Dashboard Menu
      </p>
    </div>
  
    <nav class="flex-1 space-y-2">
      <SidebarItem to="/dashboard" label="Home" />
      <SidebarItem to="/dashboard/users" label="Users" />
      <SidebarItem to="/dashboard/settings" label="Settings" />
    </nav>

    <div class="pt-4 border-t">
      <button class="w-full text-left text-lg px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
</script>
