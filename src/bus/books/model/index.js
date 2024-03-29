import generateId from 'uuid'

import { booksDB } from './db';

export const getBooks = ()=>{
    const books = [];
    booksDB.forEach((value,key)=>{
        const currentBook = {
            id: key,
            ...value
        }
        books.push(currentBook);
    })
    
    return books;
};

export const getBookById = (id) => {
const book = booksDB.get(id);

if (!book) throw new Error(`There is no book with this id`);

return {id, ...book}
}

export const saveBook= (book) => {
    const id = generateId.v1();
    booksDB.set(id, book); 
    const savedBook = booksDB.get(id);

    return {id, ...savedBook};
}

export const removeBook = (id)=> {
    const expectedBook = booksDB.get(id);
    booksDB.delete(id);

    return {id, ...expectedBook}
}

export const updateBook = (id, receivedBook) => {
    const previousBook = booksDB.get(id);
    const expectedBook = {
        ...previousBook,
        ...receivedBook
    }
    
    removeBook(id);

    booksDB.set(id, expectedBook);
    const savedBook = booksDB.get(id);

    return {id,...savedBook};
}