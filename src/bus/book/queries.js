import { ApolloError } from "apollo-server-express";
import { getBooks, getBookById } from "./model";

export const queries = {
    books: () => getBooks(),
    book: (_, {id}) => {
        try {
            getBookById(id)
        } catch ({message}) {
            throw new ApolloError(message);
        }
    }
}