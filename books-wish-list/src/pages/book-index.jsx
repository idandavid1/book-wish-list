import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { bookService } from '../services/book.service.js'
import { loadBooks } from '../store/book.actions.js'

export function BookIndex() {

    const books = useSelector(storeState => storeState.bookModule.books)

    useEffect(() => {
        loadBooks()
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