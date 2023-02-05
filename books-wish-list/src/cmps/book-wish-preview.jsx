
import { AiFillCloseSquare } from 'react-icons/ai';

export function BookWishPreview({ wishBook, onRemoveBook }) {

    return (
        <section className="book-wish-preview">
            {console.log('wishBook.title:', wishBook)}
            <div>{wishBook.title}</div>
            <AiFillCloseSquare className='icon' onClick={() => onRemoveBook(wishBook)}/>
        </section>
    )
}