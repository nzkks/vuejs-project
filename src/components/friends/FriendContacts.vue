<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
        @delete-contact="deleteContact"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'friend1',
          name: 'Jake Smith',
          phone: '01234 5678 991',
          email: 'tLZbE@example.com',
          isFavourite: false,
        },
        {
          id: 'friend2',
          name: 'Jane Doe',
          phone: '01234 5678 992',
          email: 'QvWZ0@example.com',
          isFavourite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavouriteStatus(friendId) {
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter(friend => friend.id !== friendId);
    },
  },
};
</script>
