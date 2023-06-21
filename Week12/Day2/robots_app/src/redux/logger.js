export const Logger = (store) => (next) => (action) => {
    console.log('prev state', JSON.stringify(store.getState()) );
    console.log('action', action);
    next(action)
    console.log('current state', JSON.stringify(store.getState()));
     }