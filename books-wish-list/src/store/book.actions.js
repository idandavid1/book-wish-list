import { bookService } from "../services/book.service.js";
import { store } from './store.js'
import { REMOVE_WISH_BOOK, SET_WISH_BOOKS, SET_BOOKS, ADD_WISH_BOOK } from "./book.reducer.js";

export async function loadBooks() {
    try {
        const books = await bookService.query()
        store.dispatch({ type: SET_BOOKS, books })
    } catch (err) {
        console.log('Cannot load books', err)
        throw err
    }
}

export async function loadWishBooks() {
    try {
        const wishBooks = await bookService.query(true)
        console.log('wishBooks:', wishBooks)
        store.dispatch({ type: SET_WISH_BOOKS, wishBooks })
    } catch (err) {
        console.log('Cannot load books', err)
        throw err
    }
}

export async function removeWishBook(book) {
    try {
        await bookService.toggleIsWish(book)
        store.dispatch({type: REMOVE_WISH_BOOK, book})
    } catch (err) {
        console.log('Cannot remove book', err)
        throw err
    }
}

export async function addWishBook(book) {
    try {
        await bookService.toggleIsWish(book)
        store.dispatch({type: ADD_WISH_BOOK, book})
    } catch (err) {
        console.log('Cannot add book', err)
        throw err
    }
}
