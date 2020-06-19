import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Tickets from '../views/TicketsAdmin.vue'
import EditTicket from '../views/EditTicket.vue'
import Company from '../views/Company.vue'
import isAdmin from '../router/role.js'
import EditCompany from '../views/EditCompany.vue'
import Statistics from '../views/Statistics.vue'
import UserTickets from '../views/TicketsUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      is_Admin: false,
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]

    }
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: Tickets,
    meta: {
      is_Admin: true,
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/stats',
    name: 'statistics',
    component: Statistics,
    meta: {
      is_Admin: true,
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/tickets/user',
    name: 'userTickets',
    component: UserTickets,
    meta: {
      is_Admin: false,
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/tickets/edit',
    name: 'editTicket',
    component: EditTicket,
    meta: {
      is_Admin: false,
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/company/edit',
    name: 'editCompany',
    component: EditCompany,
    meta: {
      is_Admin: true,
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/company',
    name: 'Company',
    component: Company,
    meta: {
      is_Admin: true,
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
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

  if (authRequired) {
    if (loggedIn) {
      if (to.matched.some(record => record.meta.is_Admin == true && isAdmin())) {
        next();
      }
      if (to.matched.some(record => record.meta.is_Admin == false)) {
        next();
      }
    } else {
      next('/home')
    }
  }
  else {
    next()
  }
});

export default router
