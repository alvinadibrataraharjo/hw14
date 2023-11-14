'use client';
import Books from '@/components/Books';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/lib/authStore';

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const { push } = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await axios.get('/api/books');

      setBooks(books.data);
    };
    fetchBooks();
  }, []);


  return (
    <div className="container mx-auto  px-6 ">
      {books && books.length > 0 ? (
        books.map((book) => (
          <div
            key={`${book.id} ${book.title}`}
            style={{ cursor: 'pointer' }}
          >
            <Books {...book} />
          </div>
        ))
      ) : (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
}
