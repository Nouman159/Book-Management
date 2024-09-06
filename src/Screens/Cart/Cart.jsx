import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Register from '../Register/Register';
import bookService from '../../API/bookService';

const initialdata = [
    { name: "The Enigma Code", author: "David Adams", price: 15.00 },
    { name: "Whispers of the Ancients", author: "Emily Carter", price: 20.00 },
    { name: "Beyond the Horizon", author: "Sarah Davis", price: 25.00 },
    { name: "The Last Conquest", author: "John Smith", price: 30.00 },
    { name: "Shadows of the Past", author: "Laura Thompson", price: 15.00 },
    { name: "Echoes of Tomorrow", author: "James Wilson", price: 20.00 },
    { name: "The Hidden Key", author: "Sophia Johnson", price: 25.00 },
    { name: "Legends of the Lost", author: "Michael Brown", price: 30.00 },
    { name: "Mystery of the Night", author: "Olivia Martinez", price: 15.00 },
    { name: "The Forgotten Legend", author: "Daniel Harris", price: 20.00 },
    { name: "The Eternal Quest", author: "Ava Anderson", price: 25.00 },
    { name: "Secrets of the Stars", author: "Ryan Lewis", price: 30.00 },
    { name: "Journey to the Unknown", author: "Ella Walker", price: 15.00 },
    { name: "The Time Traveler's Diary", author: "Benjamin Clark", price: 20.00 },
    { name: "The Hidden Realm", author: "Mia Robinson", price: 25.00 },
    { name: "The Lost Expedition", author: "Lucas Young", price: 30.00 }
];

const Cart = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await bookService.fetchAll()
                setBooks(response.books)
            }
            catch (e) {

            }
        }
        getBooks()
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {books.map((item, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl group">
                    <div className="relative">
                        <img src={`https://via.placeholder.com/400x250?text=${encodeURIComponent(item.name)}`} alt={item.name} className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-transparent to-orange-600 text-white p-2 rounded-bl-lg">
                            <p className="text-xs font-semibold">${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{item.name}</h2>
                        <p className="text-gray-700 mb-4">{item.author}</p>
                        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart