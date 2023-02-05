import { useState } from "react";
import  {IoIosArrowForward} from 'react-icons/io'
import  {IoIosArrowBack} from 'react-icons/io'

export function BookDetails({books}) {

    const [pageIndex , setPageIndex] = useState(0)
console.log(books)

    if(!books.length) return <div></div>
    return (
        <section className="book-details">
            <h3 className="book-title">{books[pageIndex].title}</h3>
            <h5 className="book-author">{books[pageIndex].author}</h5>
            <p className="book-description">{books[pageIndex].description}</p>
            <span className="book-rating">Rating: {books[pageIndex].rating}</span>
            <span className="book-price">Price: {books[pageIndex].price}</span>

            <button className="prev-book-btn"><IoIosArrowBack /></button>
            <button className="prev-book-btn"><IoIosArrowForward /></button>
        </section>
    )

}