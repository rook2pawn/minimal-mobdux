import Counters from './counters.js';

export const createStores = () => ({
  counters: new Counters(),
});
