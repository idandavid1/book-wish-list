import { useState } from "react";
import { IoIosArrowForward, IoLogoGameControllerA } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

export function BookDetails({ books }) {
    let _ = require('lodash')
    const [pageIndex, setPageIndex] = useState(0)

    const onSetPage = (value) => {
        if (pageIndex === 0 && value < 0 || pageIndex === books.length - 1 && value > 0) return
        setPageIndex(prevPage => (prevPage + value))
    }

    const getStarred = (rating) => {
        let fillRating = Math.round(rating)
        const outFillRating = Math.round(5 - rating)
        if(fillRating + outFillRating > 5) fillRating--
        
        return (
            <>
                {_.times(fillRating, () => <AiFillStar key={_.uniqueId('KEY_')} className="icon fill" />)}
                {_.times(outFillRating, () => <AiOutlineStar key={_.uniqueId('KEY_')} className="icon" />)}    
            </>
        )
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
            <span className="book-rating">Rating: {getStarred(books[pageIndex].rating)}</span>
            <span className="book-price">Price: {books[pageIndex].price}</span>

            <button className="prev-book-btn btn" onClick={() => onSetPage(-1)}><IoIosArrowBack /></button>
            <button className="next-book-btn btn" onClick={() => onSetPage(1)}><IoIosArrowForward /></button>
        </section>
    )

}