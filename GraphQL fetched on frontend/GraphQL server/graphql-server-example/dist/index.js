var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import 'reflect-metadata';
import { Arg, Field, InputType, Mutation, ObjectType, Query, Resolver, buildSchema } from 'type-graphql';
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
];
export default books;
// KniaOqUT0MkYFLh5
let Book = class Book {
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
Book = __decorate([
    ObjectType()
], Book);
let UserInput = class UserInput {
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], UserInput.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserInput.prototype, "title", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserInput.prototype, "author", void 0);
UserInput = __decorate([
    InputType()
], UserInput);
let MessageInput = class MessageInput {
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], MessageInput.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], MessageInput.prototype, "title", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], MessageInput.prototype, "author", void 0);
MessageInput = __decorate([
    InputType()
], MessageInput);
let BookResolver = class BookResolver {
    getBooks() {
        return books;
    }
    async addBook(userInput) {
        const newBook = {
            id: userInput.id,
            title: userInput.title,
            author: userInput.author
        };
        books.push(newBook);
        return 'Created Successfully';
    }
    async updateBook(data) {
        const bookIndex = books.findIndex(book => book.id === data.id);
        const updatedBook = { ...books[bookIndex], ...data };
        books[bookIndex] = updatedBook;
        return updatedBook;
    }
    async deleteBook(id) {
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            books.splice(index, 1)[0];
            return 'Done!';
        }
    }
};
__decorate([
    Query(() => [Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getBooks", null);
__decorate([
    Mutation(() => String),
    __param(0, Arg('userInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "addBook", null);
__decorate([
    Mutation(() => Book, { nullable: true }),
    __param(0, Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MessageInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "updateBook", null);
__decorate([
    Mutation(() => String),
    __param(0, Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "deleteBook", null);
BookResolver = __decorate([
    Resolver()
], BookResolver);
const schema = await buildSchema({
    resolvers: [BookResolver]
});
const server = new ApolloServer({ schema });
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 5000
    }
});
console.log(`🚀  Server ready at: ${url}`);
