import { useState } from "react";
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'

export function BookDetails({ books }) {

    const [pageIndex, setPageIndex] = useState(0)

    const onSetPage = (value) => {
        if (pageIndex === 0 && value < 0 || pageIndex === books.length - 1 && value > 0) return
        setPageIndex(prevPage => (prevPage + value))
    }

    if (!books.length) return <div></div>
    return (
        <section className="book-details">
            <div className="book-header">
                <h3 className="book-title">{books[pageIndex].title}</h3>
                <input type="checkbox" />
            </div>
            <h4 className="book-author">{books[pageIndex].author}</h4>
            <p className="book-description">{books[pageIndex].description}</p>
            <span className="book-rating">Rating: {books[pageIndex].rating}</span>
            <span className="book-price">Price: {books[pageIndex].price}</span>

            <button className="prev-book-btn btn" onClick={() => onSetPage(-1)}><IoIosArrowBack /></button>
            <button className="next-book-btn btn" onClick={() => onSetPage(1)}><IoIosArrowForward /></button>
        </section>
    )

}