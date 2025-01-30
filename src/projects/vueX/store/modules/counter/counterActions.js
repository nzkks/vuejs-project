export default {
  // Since the actions are in the middle of the mutations and the components, naming the action the same as the mutation is a good idea. But it can be anything.
  increment(context) {
    // console.log('action context', context);
    // example asyncronous code. Typically http requests like data fetching, etc
    setTimeout(() => {
      context.commit('increment'); // Here 'increment' refers the actual name of the mutation
    }, 1000);
  },
  increaseBy10(context, payload) {
    setTimeout(() => {
      context.commit('increaseBy10', payload); // Here 'increaseBy10' refers the actual name of the mutation
    }, 1000);
  },
};
