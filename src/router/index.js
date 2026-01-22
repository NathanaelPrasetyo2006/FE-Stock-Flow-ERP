import { createRouter, createWebHistory } from 'vue-router';

import DashboardLayouts from '@/layouts/DashboardLayouts.vue';
import DashboardHome from '@/views/dashboard/DashboardHome.vue';
import DashboardUsers from '@/views/dashboard/DashboardUsers.vue';
import DashboardSettings from '@/views/dashboard/DashboardSettings.vue';

const routes = [
  {
    path: '/dashboard',
    component: DashboardLayouts,
    children: [
      { path: '', component: DashboardHome },
      { path: 'users', component: DashboardUsers },
      { path: 'settings', component: DashboardSettings },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});