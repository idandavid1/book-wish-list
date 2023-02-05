
import { AiFillCloseSquare } from 'react-icons/ai';

export function BookWishPreview(wishBook) {
    return (
        <section className="book-wish-preview">
            <div>{wishBook.title}</div>
            <AiFillCloseSquare />
        </section>
    )
}