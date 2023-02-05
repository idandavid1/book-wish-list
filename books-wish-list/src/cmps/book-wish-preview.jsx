
import { AiFillCloseSquare } from 'react-icons/ai';

export function BookWishPreview({ wishBook }) {
    return (
        <section className="book-wish-preview">
            {console.log('wishBook.title:', wishBook)}
            <div>{wishBook.title}</div>
            <AiFillCloseSquare className='icon'/>
        </section>
    )
}