import { createApp } from 'vue';

import App from './App.vue';
import FriendContacts from './components/friends/FriendContacts.vue';

const app = createApp(App);
app.component('friend-contacts', FriendContacts);
app.mount('#app');
