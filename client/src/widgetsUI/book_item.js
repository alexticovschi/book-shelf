import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = (item) => {
    return (
        <Link to={`/books/${item._id}`} className="book_item mb-2">   
            <div className="book_header">
                <span>
                    <h2 style={{padding:"6px 0px", backgroundColor:"#fff"}}>{item.name}</h2>
                </span>
            </div> 
            <div className="book_items">
                <div className="book_author">
                    by {item.author}
                </div>
                <div className="book_bubble">  
                    <strong>Price</strong> ${item.price}
                </div>     
                <div className="book_bubble">  
                    <strong>Pages</strong> {item.pages}
                </div>   
                <div className="book_bubble rating">  
                    <strong>Rating</strong> {item.rating}
                </div>              
            </div>
        </Link>
    );
};

export default BookItem;