import { bookService } from "../services/book.service.js";
import { store } from './store.js'
import { REMOVE_BOOK, SET_BOOKS, UPDATE_BOOK } from "./book.reducer.js";

export async function loadBooks() {
    try {
        const books = await bookService.query()
        store.dispatch({ type: SET_BOOKS, books })
    } catch (err) {
        console.log('Cannot load books', err)
        throw err
    }
}

export async function removeBook(bookId) {
    try {
        await bookService.remove(bookId)
        store.dispatch({type: REMOVE_BOOK, bookId})
    } catch (err) {
        console.log('Cannot remove book', err)
        throw err
    }
}

export async function updateBook(book) {
    try {
        const saveBook = await bookService.save(book)
        store.dispatch({type: UPDATE_BOOK, book: saveBook})
        return saveBook
    } catch (err) {
        console.log('Cannot update book', err)
        throw err
    }
}
