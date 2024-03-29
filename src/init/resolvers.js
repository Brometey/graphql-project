import { queries as booksQueries } from "../bus/books/queries"
import { mutations as booksMutations } from "../bus/books/mutations"
import {queries as starshipsQueries} from '../bus/starships/queries'
import { queries as usersQueries } from "../bus/users/queries"
import { mutations as usersMutations } from "../bus/users/mutations"
export const resolvers = {
    Query: {...booksQueries, ...starshipsQueries, ...usersQueries},
    Mutation: {...booksMutations, ...usersMutations}   
}   
