import {
    State as VuexState,
    Getter as VuexGetter,
    Action as VuexAction,
    Mutation as VuexMutation,
    namespace
} from 'vuex-class';

const Getter = name => namespace(name, VuexGetter);
const Mutation = name => namespace(name, VuexMutation);
const State = name => namespace(name, VuexState);
const Action = name => namespace(name, VuexAction);

const decoratorsFor = name => ({
    Getter: Getter(name),
    Mutation: Mutation(name),
    State: State(name),
    Action: Action(name)
});
export const Permission = decoratorsFor('permission');