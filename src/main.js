import { createApp } from 'vue';

import App from './App.vue';
import FriendContacts from './components/friends/FriendContacts.vue';
import FriendContact from './components/friends/FriendContact.vue';
import CreateFriendContact from './components/friends/CreateFriendContact.vue';

const app = createApp(App);
app.component('friend-contacts', FriendContacts);
app.component('friend-contact', FriendContact);
app.component('create-friend-contact', CreateFriendContact);
app.mount('#app');
