import { combineReducers } from 'redux';

const initialState = {

};

const customer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CUSTOMER':
            return action.payload;
        default:
            return state
    }
};

const authenticate = (state = {}, action) => {
    switch(action.type) {
        case 'AUTHENTICATED':
            return {...action, authenticated: action.payload};
        default:
            return state
    }
};

const rootReducer = combineReducers({
    authenticate,
    customer,
});

export default rootReducer;