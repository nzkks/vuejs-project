import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

// import FriendContacts from './components/friends/FriendContacts.vue';
// import FriendContact from './components/friends/FriendContact.vue';
// import CreateFriendContact from './components/friends/CreateFriendContact.vue';

// import UsersWrapper from './components/users/UsersWrapper.vue';
// import UserData from './components/users/UserData.vue';
// import ActiveUser from './components/users/ActiveUser.vue';

// import KnowledgeTopics from './components/topics/KnowledgeTopics.vue';
// import ActiveElement from './components/topics/ActiveElement.vue';
// import KnowledgeBase from './components/topics/KnowledgeBase.vue';
// import KnowledgeElement from './components/topics/KnowledgeElement.vue';
// import KnowledgeGrid from './components/topics/KnowledgeGrid.vue';

import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseDialogModal from './components/ui/BaseDialogModal.vue';

import TeamsList from './components/routing/teams/TeamsList.vue';
import TeamsFooter from './components/routing/teams/TeamsFooter.vue';
import TeamMembers from './components/routing/teams/TeamMembers.vue';
import UsersList from './components/routing/users/UsersList.vue';
import UsersFooter from './components/routing/users/UsersFooter.vue';
import NotFound from './components/routing/nav/NotFound.vue';

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

const app = createApp(App);

// app.component('users-wrapper', UsersWrapper);
// app.component('user-data', UserData);
// app.component('active-user', ActiveUser);

// app.component('friend-contacts', FriendContacts);
// app.component('friend-contact', FriendContact);
// app.component('create-friend-contact', CreateFriendContact);

// app.component('knowledge-topics', KnowledgeTopics);
// app.component('active-element', ActiveElement);
// app.component('knowledge-base', KnowledgeBase);
// app.component('knowledge-element', KnowledgeElement);
// app.component('knowledge-grid', KnowledgeGrid);

app.component('BaseBadge', BaseBadge);
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.component('BaseDialogModal', BaseDialogModal);

app.use(router);

app.mount('#app');
