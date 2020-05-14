import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Tickets from '../views/Tickets.vue'
import EditTicket from '../views/EditTicket.vue'
import Company from '../views/Company.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: Tickets
  },
  {
    path: '/tickets/edit',
    name: 'editTicket',
    component: EditTicket,
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const publicPages = ['/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('account');

  if (authRequired && loggedIn == null) {
    next('/home');
  } else {
    next();
  }
});

export default router
