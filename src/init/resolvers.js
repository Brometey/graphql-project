import { queries as booksQueries } from "../bus/book/queries"
import { mutations as booksMutations } from "../bus/book/mutations"

export const resolvers = {
    Query: {...booksQueries},
    Mutation: {...booksMutations}   
}   
