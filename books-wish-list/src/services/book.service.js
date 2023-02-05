
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'book'

_createBooks()
export const bookService = {
    query,
    getById,
    toggleIsWish
}

async function query(isWish) {
    var books = await storageService.query(STORAGE_KEY)
    if(isWish) {
        books = books.filter(book => book.isWish === true)
    }
    return books
}

function getById(bookId) {
    return storageService.get(STORAGE_KEY, bookId)
}

function toggleIsWish(book) {
    book.isWish = !book.isWish
    return storageService.put(STORAGE_KEY, book)
}

function _createBooks() {
    let books = utilService.loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books =
            [
                {
                    "_id": utilService.makeId(),
                    "title": "Sea of Death",
                    "description": "Written in 1936 when Amado was twenty-four years old, Sea of Death tells the dockside tales of Bahia. Sailors and their wives, steeped in the rich mythology surrounding the goddess Iemanj?, are at the heart of this novel, a lyrical and tragic portrayal of the workers daily struggle for survival. Sea of Death narrates the story of Guma and L?via, lovers whose triumphs and tribulations mirror the dark imperatives of the world around them.",
                    "rating": "3.9",
                    "author": "Jorge Amado",
                    "price": "16.35",
                    "isWish": true
                },
                {
                    "_id": utilService.makeId(),
                    "title": "The Day Lasts More than a Hundred Years",
                    "description": "Set in the vast windswept Central Asian steppes and the infinite reaches of galactic space, this powerful novel offers a vivid view of the culture and values of the Soviet Unions Central Asian peoples.",
                    "rating": "4.5",
                    "author": "Chingiz Aitmatov",
                    "price": "24",
                    "isWish": true
                }
            ]
    }
    utilService.saveToStorage(STORAGE_KEY, books)
}

