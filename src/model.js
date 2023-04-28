const initialDB = [
    {
        title: 'Harry Potter',
        author: 'J.K Rowling'
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    },
] 

const booksDB = new Map(initialDB);

export const getBooks = ()=>booksDB;