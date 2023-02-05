import { useState } from "react";
import { bookService } from "../services/book.service";

export function FilterWishBook({ loadWishBooks }) {
    let [filterBy, setFilterBy] = useState(bookService.getEmptyFilter())
    
    function onFilterBook(key) {
        const savePrev = filterBy[key]
        filterBy = bookService.getEmptyFilter()
        filterBy[key] = !savePrev ? 1 : savePrev * -1 
        loadWishBooks(filterBy)
        setFilterBy(filterBy)
    }
    return (
        <section className="filter">
            <button onClick={() => onFilterBook('title')}>Title</button>
            <button onClick={() => onFilterBook('price')}>Price</button>
            <button onClick={() => onFilterBook('rating')}>Rating</button>
        </section>
    )
}