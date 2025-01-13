<template>
  <div style="display: flex; gap: 2rem; margin: 0 auto; width: 100%; max-width: 40rem">
    <div style="flex: 1">
      <knowledge-base @select-topic="activateTopic"></knowledge-base>
    </div>

    <div style="flex: 1">
      <active-element
        :topic-title="activeTopic && activeTopic.title"
        :text="activeTopic && activeTopic.fullText"
      ></active-element>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description: 'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },
  provide() {
    return {
      topics: this.topics,
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find(topic => topic.id === topicId);
    },
  },
};
</script>
