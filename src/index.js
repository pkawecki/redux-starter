import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionsCreator";

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(bugAdded());

store.dispatch(bugAdded())

//unsubscribe();

// store.dispatch(bugRemoved(0));

store.dispatch(bugResolved('1'));

