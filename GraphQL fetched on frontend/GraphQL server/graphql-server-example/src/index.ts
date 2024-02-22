import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import 'reflect-metadata'
import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  buildSchema
} from 'type-graphql'

const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster'
  },
  {
    id: 3,
    title: 'City of',
    author: 'Chetanya Sharma'
  },
  {
    id: 4,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    id: 5,
    title: '1984',
    author: 'George Orwell'
  },
  {
    id: 6,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    id: 7,
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  },
  {
    id: 8,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger'
  },
  {
    id: 9,
    title: 'Brave New World',
    author: 'Aldous Huxley'
  },
  {
    id: 10,
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez'
  },
  {
    id: 11,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  {
    id: 12,
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    id: 13,
    title: 'The Shining',
    author: 'Stephen King'
  },
  {
    id: 14,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    id: 15,
    title: 'Moby-Dick',
    author: 'Herman Melville'
  }
]

export default books

// KniaOqUT0MkYFLh5

@ObjectType()
class Book {
  @Field()
  id: number

  @Field()
  title: string

  @Field({ nullable: true })
  author?: string
}

@InputType()
class UserInput {
  @Field()
  id: number

  @Field()
  title: string

  @Field()
  author: string
}

@InputType()
class MessageInput {
  @Field()
  id: number

  @Field()
  title?: string

  @Field()
  author?: string
}

@Resolver()
class BookResolver {
  @Query(() => [Book])
  getBooks() {
    return books
  }

  @Mutation(() => String)
  async addBook(@Arg('userInput') userInput: UserInput): Promise<string> {
    const newBook: any = {
      id: userInput.id,
      title: userInput.title,
      author: userInput.author
    }
    books.push(newBook)
    return 'Created Successfully'
  }

  @Mutation(() => Book, { nullable: true })
  async updateBook(@Arg('data') data: MessageInput): Promise<Book | null> {
    const bookIndex = books.findIndex(book => book.id === data.id)

    const updatedBook = { ...books[bookIndex], ...data }
    books[bookIndex] = updatedBook

    return updatedBook
  }

  @Mutation(() => String)
  async deleteBook(@Arg('id') id: number): Promise<string> {
    const index = books.findIndex(book => book.id === id)

    if (index !== -1) {
      books.splice(index, 1)[0]
      return 'Done!'
    }
  }
}

const schema = await buildSchema({
  resolvers: [BookResolver]
})

const server = new ApolloServer({ schema })

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 5000
  }
})

console.log(`🚀  Server ready at: ${url}`)
