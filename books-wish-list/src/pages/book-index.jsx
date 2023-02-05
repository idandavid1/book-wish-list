import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BookDetails } from '../cmps/book-details.jsx'
import { BookWishList } from '../cmps/book-wish-list.jsx'
import { bookService } from '../services/book.service.js'
import { loadBooks, loadWishBooks } from '../store/book.actions.js'

export function BookIndex() {

    const books = useSelector(storeState => storeState.bookModule.books)
    const wishBooks = useSelector(storeState => storeState.bookModule.wishBooks)

    useEffect(() => {
        loadBooks()
        loadWishBooks()
    }, [])

    // async function onRemoveCar(carId) {
    //     try {
    //         await removeCar(carId)
    //         showSuccessMsg('Car removed')            
    //     } catch (err) {
    //         showErrorMsg('Cannot remove car')
    //     }
    // }

    // async function onUpdateCar(car) {
    //     const price = +prompt('New price?')
    //     const carToSave = { ...car, price }
    //     try {
    //         const savedCar = await updateCar(carToSave)
    //         showSuccessMsg(`Car updated, new price: ${savedCar.price}`)
    //     } catch (err) {
    //         showErrorMsg('Cannot update car')
    //     }        
    // }

    return (
        <div>
            <h3>Books App</h3>
            <main>
            </main>
        </div>
    )
}