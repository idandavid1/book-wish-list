import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BookDetails } from '../cmps/book-details.jsx'
import { BookWishList } from '../cmps/book-wish-list.jsx'
import { FilterWishBook } from '../cmps/filter-wish-book.jsx'
import { bookService } from '../services/book.service.js'
import { loadBooks, loadWishBooks, removeWishBook } from '../store/book.actions.js'

export function BookIndex() {

    const books = useSelector(storeState => storeState.bookModule.books)
    const wishBooks = useSelector(storeState => storeState.bookModule.wishBooks)

    useEffect(() => {
        loadBooks()
        loadWishBooks(bookService.getEmptyFilter())
    }, [])

    async function onRemoveBook(book) {
        try {
            removeWishBook(book)           
        } catch (err) {
            console.log('Cannot remove book')
        }
    }


    return (
        <section className='book-index'>
            <h3>Books App</h3>
            <main>
                <BookDetails books={books} />
                <div>
                <FilterWishBook loadWishBooks={loadWishBooks}/>
                <BookWishList wishBooks={wishBooks} onRemoveBook={onRemoveBook}/>
                </div>
            </main>
        </section>
    )
}