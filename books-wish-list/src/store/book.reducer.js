export const SET_BOOKS = 'SET_BOOKS'
export const SET_WISH_BOOKS = 'SET_WISH_BOOKS'
export const REMOVE_WISH_BOOK = 'REMOVE_WISH_BOOK'
export const ADD_WISH_BOOK = 'ADD_WISH_BOOK'

const initialState = {
    books: [],
    wishBooks: []
}

export function bookReducer(state = initialState, action) {
    let newState = state
    let wishBooks
    let book
    switch (action.type) {
        case SET_BOOKS:
            newState = { ...state, books: action.books }
            break
        case SET_WISH_BOOKS:
            newState = { ...state, wishBooks: action.wishBooks }
            break
        case REMOVE_WISH_BOOK:
            boards = state.boards.map(board => (board._id === action.board._id) ? action.board : board)
            return { ...state, boards }
            action.book.isWish = false
            wishBooks = state.wishBooks.filter(wishBook => wishBook._id !== action.book._id)
            newState = { ...state, wishBooks }
            break
        case ADD_WISH_BOOK:
            action.book.isWish = true
            wishBooks.push(book)
            newState = { ...state, wishBooks }
            break
        default:
    }
    return newState
}
