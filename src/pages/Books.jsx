import React from 'react'
import { books } from '../data'
import Book from '../components/UI/Book'

export default function Books() {
  return (
    <div id='books__body'>
        <main className="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">All books</h2>
                            <select id="filter">
                                <option value="DEFAULT" disabled></option>
                                <option value="LOW_TO_HIGH" >Price, Low to High</option>
                                <option value="HIGH_TO_LOW">Price, High to low</option>
                                <option value="RATINGS">Rating</option>
                            </select>
                        </div>
                        <div className="books">
                            {
                                books.map(book => <Book book={book} key={book.id}/>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
      
    </div>
  )
}
