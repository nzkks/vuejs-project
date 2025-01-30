import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './teams/TeamMembers.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, // redirect does show the route in the URL.
    // { path: '/teams', component: TeamsList, alias: '/' }, // alias does NOT show the route in the URL. example: /teams.
    // { path: '/teams', component: TeamsList },
    {
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter }, // default is the main component of the route.TeamsList,
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, // so no need of specifying '/teams/:teamId'.
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      meta: { requiresAuth: true }, // any custom property can be added like this example
      beforeEnter: (to, from, next) => {
        console.log('users beforeEnter');
        // console.log({ to, from });

        // if (to.path === '/users') {// only continue if this condition and any other condition is met
        //   next();
        // }
        next();
      },
    },

    // { path: '/teams/:teamId' },
    // { path: '/teams/new' }, // The above dynamic route should be below this line.

    // { path: '/teams/:teamId', component: TeamMembers },
    // { path: '/teams/:teamId', component: TeamMembers, props: true }, // the dynamic params (teamId) now become props
    // { path: '/:notFound(.*)', redirect: '/teams' }, // this is a catch-all route
    { path: '/:notFound(.*)', component: NotFound }, // this is a catch-all route
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log({ to, from, savedPosition });
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0, behavior: 'smooth' };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global Before each');

  // if (to.meta.requiresAuth) {
  //   console.log('requires authentication');
  //   next(); // do something like deny the navigation (next(false)) or redirect (next({name: 'login'}))
  // } else {
  //   next();
  // }

  // if (to.name === 'team-members') {
  //   next();
  // } else {
  // guarding the navigation. i.e. only allow/force navigation to '/teams/t2'
  // example scenario: if the user is not authenticated, redirect to '/teams/t2'
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }

  // next(false) // this will cancel the navigation
  next(); // next(true)
});

router.afterEach(function (to, from) {
  console.log('Global After each');
  console.log({ to, from });

  // This is just used for logging purposes (send logs to analytics, etc). Not used for controlling the navigation
});

export default router;
