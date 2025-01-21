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
import UsersList from './components/routing/users/UsersList.vue';
import TeamMembers from './components/routing/teams/TeamMembers.vue';
import NotFound from './components/routing/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, // redirect does show the route in the URL.
    // { path: '/teams', component: TeamsList, alias: '/' }, // alias does NOT show the route in the URL. example: /teams.
    // { path: '/teams', component: TeamsList },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        { path: ':teamId', component: TeamMembers, props: true }, // so no need of specifying '/teams/:teamId'.
      ],
    },
    { path: '/users', component: UsersList },

    // { path: '/teams/:teamId' },
    // { path: '/teams/new' }, // The above dynamic route should be below this line.

    // { path: '/teams/:teamId', component: TeamMembers },
    // { path: '/teams/:teamId', component: TeamMembers, props: true }, // the dynamic params (teamId) now become props
    // { path: '/:notFound(.*)', redirect: '/teams' }, // this is a catch-all route
    { path: '/:notFound(.*)', component: NotFound }, // this is a catch-all route
  ],
  linkActiveClass: 'active',
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
