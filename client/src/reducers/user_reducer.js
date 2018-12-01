export default function(state={}, action) {
    switch(action.type) {
        case 'USER_LOGIN':
            return { ...state, login:action.payload }    
        case 'USER_AUTH':
            return { ...state, login:action.payload }    
        case 'GET_USER_POSTS':
            return { ...state, user_posts:action.payload }    
        case 'GET_USERS':
            return { ...state, registered_users:action.payload }
        default:
            return state;
    }
}