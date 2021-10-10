import * as actions from './actionTypes';

export const bugAdded = (description) => (
        {
            type: actions.BUG_ADDED,
            payload: {
                description: 'Some bug No1.'
        }
    })


export function bugRemoved(description){
    return {
            type: actions.BUG_REMOVED,
            payload:{
            id: 0,
        }
    }
}

export function bugResolved(id){
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id,
        }
    }
}