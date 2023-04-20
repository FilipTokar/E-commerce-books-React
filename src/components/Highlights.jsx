import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Highlight from './UI/Highlight'

export default function Highlights() {
  return (
    <section id='highlights'>
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight 
                    icon={<FontAwesomeIcon icon="bolt"/>} 
                    title="Easy and Quick"
                    para= "Easy and simple access to all your books."/>
                    <Highlight 
                    icon={<FontAwesomeIcon icon="book-open"/>} 
                    title="10,000+ Books"
                    para= "Library has every book u can think of."/>
                    <Highlight 
                    icon={<FontAwesomeIcon icon="bolt"/>} 
                    title="Affordable"
                    para= "We offer books for as low as $10."/>
                </div>
            </div>
        </div>
    </section>
  )
}
