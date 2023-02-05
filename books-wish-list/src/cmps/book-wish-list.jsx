
import { BookWishPreview } from "./book-wish-preview"

export function BookWishList({ wishBooks }) {
    return (
        <ul className="book-wish-list">
            {
                wishBooks.map(wishBook => {
                    return <li key={wishBook._id}>
                        <BookWishPreview wishBook={wishBook}/>
                    </li>
                })  
            }
        </ul>
    )
}