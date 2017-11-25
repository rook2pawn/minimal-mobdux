import { normalizeArray } from 'mobdux';
import { action, computed, observable } from 'mobx';

export default class Counters {
    @observable counters = [
        { id: 'counter-1', count: 100 },
        { id: 'counter-2', count: 200 },
        { id: 'counter-3', count: 300 },
    ];

    @computed get ids() {
        return this.counters.map(counter => counter.id);
    }

    /* returns an object of counters, indexed by their id
    * {
    *     'counter-1': {
    *          id: 'counter-1',
    *          count: 100,
    *      },
    *      'counter-2': {
    *          id: 'counter-2',
    *          count: 200,
    *      }
    * }
    */
    @computed get byId() {
        return normalizeArray(this.counters, 'id');
    }

    @action addCounter = () => {
        this.counters.push({
            id: `counter-${this.counters.length + 1}`,
            count: 0,
        });
    }

    @action increment = (id) => {
        this.byId[id].count++;
    }
}
