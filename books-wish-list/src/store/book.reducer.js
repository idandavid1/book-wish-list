export const SET_BOOKS = 'SET_BOOKS'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'

const initialState = {
    books: [],
}

export function bookReducer(state = initialState, action) {
    let newState = state
    let books
    switch (action.type) {
        case SET_BOOKS:
            newState = { ...state, books: action.books }
            break
        case REMOVE_BOOK:
            books = state.books.filter(book => book._id !== action.bookId)
            newState = { ...state, books }
            break
        case UPDATE_BOOK:
            books = state.books.map(book => (book._id === action.book._id) ? action.book : book)
            newState = { ...state, books }
            break
        default:
    }
    return newState
}
