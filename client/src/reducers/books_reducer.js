export default function(state={}, action) {
    switch(action.type) {
        case 'GET_BOOKS':
            return { ...state, list:action.payload }
        case 'GET_BOOK_REVIEW':
            return { ...state, book:action.payload }
        case 'GET_BOOK_WITH_REVIEWER':
            return { 
                ...state, 
                book: action.payload.book,
                reviewer: action.payload.reviewer
            }
        case 'CLEAR_BOOK_WITH_REVIEWER':
            return { 
                ...state, 
                book: action.payload.book,
                reviewer: action.payload.reviewer
            }
        case 'CLEAR_NEWBOOK':
            return { ...state, newbook: action.payload }
        case 'CLEAR_REVIEW':
            return { 
                ...state, 
                updated_review: action.payload.updated_review,
                book: action.payload.book
             }        
        case 'ADD_REVIEW':
            return { ...state, newbook: action.payload }
        case 'UPDATE_BOOK_REVIEW':
            return { 
                ...state, 
                updated_review: action.payload.success,
                book: action.payload.doc
             }        
        case 'DELETE_REVIEW':
            return { 
                ...state, 
                review_deleted: action.payload 
            }         
        default:
            return state;
    }
}