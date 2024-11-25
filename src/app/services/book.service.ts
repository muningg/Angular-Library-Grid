import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Book } from '../Models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      name: 'The Pragmatic Programmer',
      description: 'Guidance on career development, software development best practices, and techniques for keeping code flexible and reusable.',
      price: 49.99,
      image: 'assets/1.jpg',
      category: 'Book'
    },
    {
      id: 2,
      name: 'Clean Code',
      description: 'Improve your coding skills with Clean Code. This book is a must-read for any developer, software engineer, or project manager looking to produce better code. Learn how to write clean, efficient code, and how to maintain it over time.',
      price: 129.99,
      image: 'assets/2.jpg',
      category: 'Book'
    },
    {
      id: 3,
      name: 'Code Complete',
      description: 'A Practical Handbook of Software Construction, Second Edition',
      price: 19.99,
      image: 'assets/3.jpg',
      category: 'Book'
    },
    {
      id: 4,
      name: 'Code',
      description: 'The Hidden Language of Computer Hardware and Software',
      price: 199.99,
      image: 'assets/4.jpg',
      category: 'Book'
    },
    {
      id: 5,
      name: 'Refactoring',
      description: 'Improving the Design of Existing Code (2nd Edition)',
      price: 24.99,
      image: 'assets/5.jpg',
      category: 'Book'
    },
    {
      id: 6,
      name: 'Programming Pearls',
      description: 'Clever solutions to common programming problems. A classic collection of programming pearls.',
      price: 29.99,
      image: 'assets/6.jpg',
      category: 'Book'
    },
    {
      id: 7,
      name: 'Introduction to Algorithms',
      description: 'Comprehensive guide to algorithms, covering topics in depth while being accessible to all levels of readers. Includes improved treatment of dynamic programming and greedy algorithms, and two new chapters on van Emde Boas trees and multithreaded algorithms.',
      price: 79.99,
      image: 'assets/7.jpg',
      category: 'Book'
    },
    {
      id: 8,
      name: 'The Mythical Man-Month',
      description: 'Essays on Software Engineering, Anniversary Edition (2nd Edition)',
      price: 24.99,
      image: 'assets/8.jpg',
      category: 'Book'
    },
    {
      id: 9,
      name: 'Working Effectively with Legacy Code',
      description: 'Techniques for working with legacy code, including how to improve performance, add features, fix bugs, and optimize performance.',
      price: 299.99,
      image: 'assets/9.jpg',
      category: 'Book'
    },
    {
      id: 10,
      name: 'Effective Java',
      description: 'Best practices for Java 7-9.',
      price: 34.99,
      image: 'assets/10.jpg',
      category: 'Book'
    },
    {
      id: 11,
      name: 'Design Patterns',
      description: 'Learn timeless and elegant solutions to common software design problems with this modern classic.',
      price: 14.99,
      image: 'assets/11.jpg',
      category: 'Book'
    },
    {
      id: 12,
      name: 'Structure and Interpretation of Computer Programs',
      description: 'Classic book on computer science and programming. Revised edition with new example sections and exercises.',
      price: 149.99,
      image: 'assets/12.jpg',
      category: 'Book'
    },
    {
      id: 13,
      name: 'Don\'t Make Me Think',
      description: 'A Common Sense Approach to Web Usability',
      price: 19.99,
      image: 'assets/13.jpg',
      category: 'Book'
    },
   
    {
      id: 14,
      name: 'Cracking the Coding Interview',
      description: '189 Programming Questions and Solution',
      price: 9.99,
      image: 'assets/15.jpg',
      category: 'Book'
    },
    {
      id: 15,
      name: 'Domain-Driven Design',
      description: 'Tackling Complexity in the Heart of Software',
      price: 49.99,
      image: 'assets/16.jpg',
      category: 'Book'
    },
    {
      id: 16,
      name: 'Head First Design Patterns',
      description: 'Building Extensible and Maintainable Object-Oriented Software',
      price: 39.99,
      image: 'assets/14.jpg',
      category: 'Book'
    },
    {
      id: 17,
      name: 'Eloquent JavaScript',
      description: 'A Modern Introduction to Programming',
      price: 19.99,
      image: 'assets/17.jpg',
      category: 'Book'
    },
    {
      id: 18,
      name: 'C Programming Language',
      description: 'A concise, classic reference guide to C programming, updated with the ANSI standard. Examples are easy to follow and have been tested directly from the text.',
      price: 59.99,
      image: 'assets/18.jpg',
      category: 'Book'
    }
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  addBook(book: Book): Observable<Book> {
    this.books.push(book);
    return of(book);
  }
}

