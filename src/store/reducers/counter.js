import * as types from '@actions/counter/types'

const initialUsersState = 0

export const counter = (state = initialUsersState, action) => {
    switch(action.type) {
        case types.INCREMENT:
            return state + 1
        break
        case types.DECREMENT:
            return state - 1
        break
        default:
            return state
        break
    }
}