import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Staff from '@/components/Staff'
import Legacy from '@/components/Legacy'
import Contact from '@/components/Contact'
import Registration from '@/components/Registration'
import Schedule from '@/components/Schedule'
import Events from '@/components/Events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/legacy',
      name: 'Legacy',
      component: Legacy
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
  ]
})